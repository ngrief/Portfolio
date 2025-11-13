#!/usr/bin/env python3
"""Generate Open Graph preview image for portfolio"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create a 1200x630 image (LinkedIn/OG standard)
width, height = 1200, 630
img = Image.new('RGB', (width, height), color='#0a0a0a')
draw = ImageDraw.Draw(img)

# Create gradient background
for y in range(height):
    # Dark gradient from top to bottom with blue accent
    r = int(10 + (y / height) * 20)
    g = int(10 + (y / height) * 30)
    b = int(40 + (y / height) * 60)
    draw.rectangle([(0, y), (width, y+1)], fill=(r, g, b))

# Add accent bars
draw.rectangle([(0, 0), (8, height)], fill='#3b82f6')  # Left accent bar
draw.rectangle([(width-8, 0), (width, height)], fill='#8b5cf6')  # Right accent bar

# Load profile photo if available
try:
    profile_path = '/home/user/Portfolio/frontend/public/assets/IMG_3024.JPG'
    if os.path.exists(profile_path):
        profile = Image.open(profile_path)
        # Resize and crop to circle
        profile = profile.resize((280, 280), Image.Resampling.LANCZOS)

        # Create circular mask
        mask = Image.new('L', (280, 280), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.ellipse((0, 0, 280, 280), fill=255)

        # Paste profile photo
        img.paste(profile, (80, 175), mask)

        # Add circle border
        draw.ellipse((75, 170, 365, 460), outline='#3b82f6', width=5)
except Exception as e:
    print(f"Could not load profile photo: {e}")

# Try to use a nice font, fall back to default
try:
    font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 72)
    font_subtitle = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 28)
except:
    font_title = ImageFont.load_default()
    font_subtitle = ImageFont.load_default()
    font_small = ImageFont.load_default()

# Add text content
text_x = 420
name = "NATHANIEL TRIEF"
draw.text((text_x, 120), name, fill='#ffffff', font=font_title)

# Add title lines
titles = [
    "Equity Investment Manager",
    "AI Red Team Specialist",
    "Data & Quantitative Analyst"
]

y_pos = 230
for title in titles:
    draw.text((text_x, y_pos), title, fill='#94a3b8', font=font_subtitle)
    y_pos += 50

# Add certifications badge
draw.rectangle([(text_x, 400), (text_x + 580, 470)],
               fill='#1e293b', outline='#3b82f6', width=2)
cert_text = "DataCamp | Databricks | Snowflake Certified"
draw.text((text_x + 20, 420), cert_text, fill='#60a5fa', font=font_small)

# Add bottom accent line with stats
draw.rectangle([(50, height-100), (width-50, height-98)], fill='#3b82f6')
stats_text = "$6M+ AUM  •  87% ML Accuracy  •  1M+ Records Analyzed"
draw.text((width//2 - 350, height-75), stats_text, fill='#94a3b8', font=font_small)

# Save the image
output_path = '/home/user/Portfolio/frontend/public/og-preview.png'
img.save(output_path, 'PNG', quality=95)
print(f"✓ Created preview image: {output_path}")
print(f"  Size: {width}x{height}px")
print(f"  Optimized for LinkedIn, Twitter, and Facebook")
