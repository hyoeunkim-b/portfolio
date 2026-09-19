"""Build the approved 24.8-second product tour. Requires Pillow."""

from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public/images/projects/ndt"
SOURCES = ASSETS / "gif-sources"
OUTPUT = ASSETS / "product-preview.gif"
POSTER = ASSETS / "product-preview-poster.webp"
SIZE = (1440, 810)
DURATIONS = [1500, 2000, 2000, 2000, 2000, 2000, 2000, 800, 2500, 2000, 2000, 2000, 2000]

sources = sorted(SOURCES.glob("*.png"))
assert len(sources) == len(DURATIONS), "Expected 13 numbered source images"
frames = []
for index, path in enumerate(sources, 1):
    assert path.name.startswith(f"{index:02}-"), path.name
    with Image.open(path) as original:
        image = ImageOps.contain(original.convert("RGB"), SIZE, Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", SIZE, "white")
        canvas.paste(image, ((SIZE[0] - image.width) // 2, (SIZE[1] - image.height) // 2))
        frames.append(canvas.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE))

frames[0].save(OUTPUT, save_all=True, append_images=frames[1:], duration=DURATIONS,
               loop=0, disposal=2, optimize=False)

with Image.open(OUTPUT) as result:
    assert result.size == SIZE and result.n_frames == 13
    assert result.info["loop"] == 0
    result.convert("RGB").save(POSTER, quality=90)
    timings = []
    for index in range(result.n_frames):
        result.seek(index)
        timings.append(result.info["duration"])
    assert timings == DURATIONS

print(f"{OUTPUT}\n{SIZE[0]} × {SIZE[1]}, {sum(DURATIONS)/1000}s, {OUTPUT.stat().st_size/1024/1024:.2f} MiB")
