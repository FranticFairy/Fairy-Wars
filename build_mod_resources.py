#! /usr/bin/env nix-shell
#! nix-shell -i python3 -p python313Full python313Packages.pillow

from PIL import Image

# Read the color map
color_map = {}
for line in open("templates/color_map.txt").read().splitlines():
    if line.strip() != "":
        src, dst = line.split(",")
        color_map[int(src, 16)] = int(dst, 16)

def packRgba(t):
    return (t[0] << 16) | (t[1] << 8) | (t[2])
def unpackRgba(c):
    return ((c >> 16) & 0xFF, (c >> 8) & 0xFF, c & 0xFF, 255)

# Read the unit map
unit_map = {}
for line in open("templates/unit_map.txt").read().splitlines():
    if line.strip() != "":
        unit, x, y = line.split(",")
        unit_map[unit] = (int(y), int(x))

# Function for remapping an image to the mask format
def remapImage(image):
    base = Image.new("RGBA", image.size)
    mask = Image.new("RGBA", image.size)

    for x in range(image.size[0]):
        for y in range(image.size[1]):
            pixel = image.getpixel((x,y))
            assert pixel[3] == 255 or pixel[3] == 0
            if pixel[3] != 0:
                decoded = packRgba(pixel)
                if decoded in color_map:
                    mask.putpixel((x, y), unpackRgba(color_map[decoded]))
                else:
                    base.putpixel((x, y), pixel)

    return base, mask

# Function for splitting an image map
def splitImage(image, paths, data, size = (16, 16)):
    if type(paths) == str:
        paths = [paths]

    for name in data:
        x, y = data[name]
        zone = (x * size[0], y * size[1], (x + 1) * size[0], (y + 1) * size[1])
        crop = image.crop(zone)

        for path in paths:
            crop.save(path.replace("?", name))

# Split image map
unit_base, unit_mask = remapImage(Image.open("templates/allUnits.png"))
splitImage(unit_base, ["images/battleanimations/?.png", "images/units/?.png"], unit_map)
splitImage(unit_mask, ["images/battleanimations/?+mask.png", "images/units/?+mask.png"], unit_map)
