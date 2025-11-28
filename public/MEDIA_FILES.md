# Media Files Structure for Nandini Love Ultimate

## Directory Structure
```
public/
├── images/
│   ├── gallery/
│   │   ├── image_001.jpg (Memory photo 1)
│   │   ├── image_002.jpg (Memory photo 2)
│   │   ├── image_003.jpg (Memory photo 3)
│   │   ├── image_004.jpg (Memory photo 4)
│   │   ├── image_005.jpg (Memory photo 5)
│   │   └── image_006.jpg (Memory photo 6)
│   ├── hero/
│   │   ├── hero_bg_001.jpg (Hero background)
│   │   └── hero_overlay_001.png (Hero overlay)
│   ├── avatars/
│   │   ├── nandini_avatar_001.png
│   │   └── user_avatar_001.png
│   └── icons/
│       ├── heart_001.svg
│       ├── flower_001.svg
│       ├── star_001.svg
│       ├── letter_001.svg
│       ├── gift_001.svg
│       └── game_001.svg
├── videos/
│   ├── promo_001.mp4 (Website promo)
│   └── memory_001.mp4 (Memory video)
├── audio/
│   ├── bgm_001.mp3 (Background music)
│   ├── bgm_002.mp3 (Background music 2)
│   ├── heart_beat_001.mp3 (Heart beat sound)
│   └── click_sound_001.mp3 (Click sound)
└── 3d/
    ├── heart_model_001.glb (3D heart)
    ├── flower_model_001.glb (3D flower)
    └── ring_model_001.glb (3D ring)
```

## File Naming Convention
- Format: `{type}_{description}_{number}.{ext}`
- Numbers: Zero-padded (001, 002, etc.)
- Lower case with underscores
- Example: `image_gallery_001.jpg`

## Image Optimization
- Hero images: 1920x1080 px, max 500KB
- Gallery images: 1200x1200 px, max 300KB
- Icons: 256x256 px SVG or PNG
- Avatars: 200x200 px, max 100KB

## Video Specifications
- Format: MP4 (H.264 codec)
- Resolution: 1080p or less
- Max file size: 50MB per video

## Audio Specifications
- Format: MP3 (128kbps)
- Sample rate: 44.1kHz
- Max file size: 10MB per audio

## 3D Models
- Format: GLB (GLTF binary)
- Optimization: Compressed
- Max file size: 5MB per model
