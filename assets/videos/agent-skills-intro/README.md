# Agent Skills Intro Video

Video giới thiệu 3 Agent Skills chính của ClaudeKit:
- **ai-multimodal**: Process multimedia với Google Gemini API
- **ai-artist**: Prompt engineering + Image generation
- **ui-ux-pro-max**: Design intelligence với 50+ styles

## Thông số video

- Resolution: 1920x1080 (Full HD)
- FPS: 30
- Duration: ~24 giây
- Format: MP4

## Cấu trúc

```
src/
├── index.ts           # Entry point
├── Root.tsx           # Compositions
├── AgentSkillsIntro.tsx # Main composition
├── styles.ts          # Design tokens
├── components/
│   ├── AnimatedBackground.tsx
│   ├── FeatureCard.tsx
│   ├── SkillBadge.tsx
│   └── TypewriterText.tsx
└── scenes/
    ├── IntroScene.tsx
    ├── AIMultimodalScene.tsx
    ├── AIArtistScene.tsx
    ├── UIUXProMaxScene.tsx
    └── OutroScene.tsx
```

## Commands

```bash
# Install dependencies
npm install

# Preview in Remotion Studio
npm start

# Render video
npm run build

# Output: out/agent-skills-intro.mp4
```

## Scenes Timeline

1. **Intro** (0-3s): ClaudeKit logo + title
2. **AI Multimodal** (3-9s): Features & capabilities
3. **AI Artist** (9-15s): Prompt examples & styles
4. **UI/UX Pro Max** (15-21s): Design system & stacks
5. **Outro** (21-24s): CTA & summary

## Customization

Edit `src/styles.ts` to change:
- Colors per skill
- Typography
- Timing
