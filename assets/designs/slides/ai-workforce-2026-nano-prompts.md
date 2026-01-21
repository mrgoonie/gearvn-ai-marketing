# Nano Banana Prompts - AI Workforce 2026 Slides

**Style:** Neobrutalism + Technical Blueprint + Isometric
**Colors:** Yellow #FFEB3B, Red #FF5252, Blue #2196F3, Black outlines 4px
**Platform:** Gemini Nano Banana (gemini-2.5-flash-image or gemini-3-pro-image-preview)
**Aspect Ratio:** 16:9

---

## Prompt 1: AI Landscape 2026 (Slide 3)

```
Technical blueprint illustration of a futuristic AI landscape in 2026. Isometric view showing three interconnected platforms: (1) Agentic Coding - robots controlling code agents, (2) On-the-Fly Software - self-building software structures, (3) AI Race - abstract company towers competing. Style: Neobrutalism technical drawing with bold black outlines 4px, yellow #FFEB3B, red #FF5252, blue #2196F3 accent colors. Circuit board patterns in background. Wireframe aesthetic. NEVER include text or watermarks. Aspect ratio 16:9. Professional technical illustration.
```

**Parameters:**
```python
aspect_ratio="16:9"
image_size="2K"
```

---

## Prompt 2: Agentic Coding / Human Pilot (Slide 4)

```
Technical illustration of a human pilot in cockpit controlling multiple AI robot agents. Isometric blueprint style. The pilot has steering wheel and dashboard with metrics. 5-6 small robot agents are executing code tasks around. Style: Neobrutalism with bold black outlines 4px, yellow #FFEB3B highlights on dashboard, red #FF5252 on warning indicators, blue #2196F3 on robots. Wireframe and circuit patterns. NEVER include text. Aspect ratio 16:9.
```

---

## Prompt 3: Self-Building Software (Slide 5)

```
Technical blueprint of self-evolving software concept. Central large cube/block generating smaller cubes automatically. Conveyor belt of code blocks being assembled. Robotic arms building software modules. Style: Neobrutalism isometric view, bold black outlines 4px, yellow #FFEB3B for main structure, blue #2196F3 for generated modules, red #FF5252 for energy/power indicators. Circuit board background pattern. Wireframe aesthetic. NEVER include text. Aspect ratio 16:9.
```

---

## Prompt 4: Personal Tools with AI (Slide 8)

```
Technical blueprint of a person at desk building custom software tools with AI assistance. Isometric view. Person with laptop, multiple floating tool windows around: calendar, dashboard, charts. Small robot assistant helping. Style: Neobrutalism with bold black outlines 4px, yellow #FFEB3B for highlights, blue #2196F3 for tool windows, red #FF5252 for important elements. Wireframe aesthetic, circuit patterns. NEVER include text. Aspect ratio 16:9.
```

---

## Prompt 5: Community Collaboration (Slide 19)

```
Technical blueprint illustration of community collaboration. Multiple people standing together on interconnected platforms, helping each other climb up. Hands reaching out to help. Isometric view. Style: Neobrutalism with bold black outlines 4px, yellow #FFEB3B for people/highlights, blue #2196F3 for platforms, warm atmosphere. Wireframe aesthetic. NEVER include text. Aspect ratio 16:9.
```

---

## Usage Instructions

### Option A: Gemini Web UI
1. Go to gemini.google.com
2. Select Gemini Pro with image generation
3. Paste prompt directly
4. Download generated image
5. Replace placeholder in HTML slides

### Option B: API Call
```python
from google import genai

client = genai.Client()
response = client.models.generate_content(
    model='gemini-2.5-flash-image',
    contents=PROMPT_HERE,
    config=genai.types.GenerateContentConfig(
        response_modalities=['IMAGE'],
        image_generation_config=genai.types.ImageGenerationConfig(
            aspect_ratio='16:9',
            image_size='2K'
        )
    )
)
```

### Option C: Claude + ai-multimodal Skill
```
/ai-multimodal generate image with prompt: [PASTE PROMPT]
```

---

## Notes

- All prompts optimized for Neobrutalism style with technical drawing aesthetic
- Bold 4px black outlines are consistent across all images
- Color palette: Yellow #FFEB3B (primary), Red #FF5252 (accent), Blue #2196F3 (secondary)
- Isometric perspective for cohesive visual language
- "NEVER include text" constraint to avoid Gemini text rendering issues
