import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SkillBadge } from '../components/SkillBadge';
import { FeatureCard } from '../components/FeatureCard';
import { COLORS } from '../styles';

const FEATURES = [
  { icon: '🔍', title: '6000+ Curated Prompt Examples' },
  { icon: '⚡', title: 'Standard Mode (Flash - Fast)' },
  { icon: '✨', title: 'Creative Mode (Pro - Quality)' },
  { icon: '🎯', title: 'BM25 Semantic Search' },
  { icon: '🖼️', title: 'Infographics & Thumbnails' },
  { icon: '🎭', title: 'Avatars & Product Shots' },
];

const STYLES = [
  'Cyberpunk Neon',
  'Vaporwave',
  'Isometric 3D',
  'Bento Grid',
  'Editorial',
];

export const AIArtistScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title animation
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [-30, 0]);

  // Description animation
  const descFrame = Math.max(0, frame - 0.3 * fps);
  const descSpring = spring({
    frame: descFrame,
    fps,
    config: { damping: 200 },
  });
  const descOpacity = interpolate(descSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill>
      <AnimatedBackground
        accentColor={COLORS.aiArtist.primary}
        glowColor={COLORS.aiArtist.glow}
      />

      <AbsoluteFill
        style={{
          padding: '80px 120px',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <SkillBadge
            name="ai-artist"
            accentColor={COLORS.aiArtist.primary}
            delay={0.1}
          />

          <h2
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: COLORS.textPrimary,
              fontFamily: 'Inter, system-ui, sans-serif',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            AI Artist
          </h2>

          <p
            style={{
              fontSize: 24,
              color: COLORS.textSecondary,
              fontFamily: 'Inter, system-ui, sans-serif',
              margin: 0,
              maxWidth: 700,
              lineHeight: 1.5,
              opacity: descOpacity,
            }}
          >
            Prompt engineering + image generation with dual-option workflow
          </p>
        </div>

        {/* Content layout */}
        <div style={{ display: 'flex', gap: 60 }}>
          {/* Feature Grid */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              flex: 1,
            }}
          >
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                delay={0.4 + index * 0.12}
                accentColor={COLORS.aiArtist.primary}
              />
            ))}
          </div>

          {/* Styles showcase */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              minWidth: 300,
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: COLORS.textMuted,
                fontFamily: 'Inter, system-ui, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Art Directions
            </span>
            {STYLES.map((style, i) => {
              const styleFrame = Math.max(0, frame - (0.8 + i * 0.15) * fps);
              const styleSpring = spring({
                frame: styleFrame,
                fps,
                config: { damping: 200 },
              });
              const styleOpacity = interpolate(styleSpring, [0, 1], [0, 1]);
              const styleX = interpolate(styleSpring, [0, 1], [20, 0]);

              return (
                <div
                  key={style}
                  style={{
                    padding: '12px 20px',
                    background: `linear-gradient(90deg, ${COLORS.aiArtist.primary}20 0%, transparent 100%)`,
                    borderLeft: `3px solid ${COLORS.aiArtist.primary}`,
                    borderRadius: '0 8px 8px 0',
                    fontSize: 18,
                    fontWeight: 500,
                    color: COLORS.textPrimary,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    opacity: styleOpacity,
                    transform: `translateX(${styleX}px)`,
                  }}
                >
                  {style}
                </div>
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
