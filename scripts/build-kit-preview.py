"""Build the KIT preview from its shared scene manifest. Requires ffmpeg."""
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
FFMPEG = os.environ.get('FFMPEG_BIN') or shutil.which('ffmpeg')
if not FFMPEG:
    raise SystemExit('Set FFMPEG_BIN to the ffmpeg executable.')
SCENES = json.loads((ROOT / 'src/content/projects/kit-preview-scenes.json').read_text())
ASSETS = json.loads((ROOT / 'src/content/projects/kit-assets.json').read_text())
OUT = ROOT / 'public/images/projects/kit/v2'
SOURCE = ROOT / '.local-assets/kit/kit_visual_video.mp4'
WIDTH, HEIGHT, FPS = 1920, 1080, 30

def run(arguments):
    subprocess.run([FFMPEG, '-hide_banner', '-loglevel', 'error', '-y', *arguments], check=True)

with tempfile.TemporaryDirectory(prefix='kit-preview-') as directory:
    working = Path(directory)
    for index, scene in enumerate(SCENES):
        duration = scene['duration']
        if 'image' in scene:
            asset = ASSETS[scene['image']]
            inputs = ['-loop', '1', '-framerate', str(FPS), '-i', str(ROOT / 'public' / asset['src'].lstrip('/'))]
            scaled_height = asset['height'] * WIDTH / asset['width']
            # Compare image and screen heights after fitting the image to screen width.
            if scaled_height >= HEIGHT * 2:
                scroll_time = duration - 2
                filters = f"scale={WIDTH}:-2:flags=lanczos,crop={WIDTH}:{HEIGHT}:0:'(ih-oh)*min(max((t-1)/{scroll_time},0),1)'"
            else:
                filters = f'scale={WIDTH}:{HEIGHT}:force_original_aspect_ratio=decrease:flags=lanczos,pad={WIDTH}:{HEIGHT}:(ow-iw)/2:(oh-ih)/2:black'
        else:
            inputs = ['-ss', str(scene['videoStart']), '-i', str(SOURCE)]
            filters = f'scale={WIDTH}:{HEIGHT}:flags=lanczos'
        run([*inputs, '-t', str(duration), '-vf', filters + ',setsar=1', '-an', '-c:v', 'libx264', '-preset', 'medium', '-crf', '24', '-pix_fmt', 'yuv420p', '-r', str(FPS), '-map_metadata', '-1', str(working / f'{index}.mp4')])
    listing = working / 'segments.txt'
    listing.write_text(''.join(f"file '{working / f'{index}.mp4'}'\n" for index in range(len(SCENES))))
    run(['-f', 'concat', '-safe', '0', '-i', str(listing), '-c', 'copy', '-movflags', '+faststart', str(OUT / 'experience-preview.mp4')])
    run(['-i', str(OUT / 'experience-preview.mp4'), '-frames:v', '1', '-c:v', 'libwebp', '-quality', '90', str(OUT / 'experience-preview-poster.webp')])
print(f"Built {sum(scene['duration'] for scene in SCENES)}s preview: {(OUT / 'experience-preview.mp4').stat().st_size:,} bytes")
