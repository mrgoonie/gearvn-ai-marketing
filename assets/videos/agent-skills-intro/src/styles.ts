// Design tokens for Agent Skills Intro Video

export const COLORS = {
  // Primary gradient - futuristic tech vibe
  gradientPrimary: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #16213E 100%)',

  // Accent colors per skill
  aiMultimodal: {
    primary: '#00D4FF',    // Cyan
    secondary: '#7B68EE',  // Medium slate blue
    glow: 'rgba(0, 212, 255, 0.4)',
  },
  aiArtist: {
    primary: '#FF6B9D',    // Pink
    secondary: '#C44BFF',  // Purple
    glow: 'rgba(255, 107, 157, 0.4)',
  },
  uiUxProMax: {
    primary: '#4ADE80',    // Green
    secondary: '#22D3EE',  // Cyan
    glow: 'rgba(74, 222, 128, 0.4)',
  },

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',

  // Background
  bgDark: '#0A0A0F',
  bgCard: 'rgba(26, 26, 46, 0.8)',
  bgCardBorder: 'rgba(255, 255, 255, 0.1)',
};

export const TYPOGRAPHY = {
  fontHeading: 'Inter, system-ui, sans-serif',
  fontBody: 'Inter, system-ui, sans-serif',
  fontMono: 'JetBrains Mono, monospace',
};

export const SIZING = {
  width: 1920,
  height: 1080,
  fps: 30,
};

// Timing in seconds
export const TIMING = {
  intro: 3,
  skillSection: 6,
  transition: 0.5,
  outro: 3,
};

// Calculate total duration in frames
export const calculateTotalFrames = () => {
  const { intro, skillSection, transition, outro } = TIMING;
  const totalSeconds = intro + (skillSection * 3) + (transition * 4) + outro;
  return Math.ceil(totalSeconds * SIZING.fps);
};
