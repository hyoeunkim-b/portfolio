"""Build the VARLOS preview without cropping the supplied 1920×944 screens."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / 'public/images/projects/valros'
frames = []
for index in range(1, 20):
    with Image.open(root / 'gif-sources' / f'gif{index:02}.png') as source:
        assert source.size == (1920, 944)
        frame = source.convert('RGB').resize((1440, 708), Image.Resampling.LANCZOS)
        if index == 1:
            frame.save(root / 'product-preview-poster.webp', quality=90)
        frames.append(frame.quantize(colors=256))
durations = [1800] * 19
durations[6:11] = [2400] * 5
durations[-1] = 2600
frames[0].save(root / 'product-preview.gif', save_all=True, append_images=frames[1:], duration=durations, loop=0, disposal=2, optimize=False)
with Image.open(root / 'product-preview.gif') as result:
    assert result.n_frames == 19 and result.size == (1440, 708)
    for i, duration in enumerate(durations):
        result.seek(i)
        assert result.info['duration'] == duration
print(f'19 frames, {sum(durations)/1000}s, {(root / "product-preview.gif").stat().st_size:,} bytes')
