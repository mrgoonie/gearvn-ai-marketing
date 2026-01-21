import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SkillBadge } from '../components/SkillBadge';
import { FeatureCard } from '../components/FeatureCard';
import { COLORS } from '../styles';

const FEATURES = [
  { icon: '🎵', title: 'Audio Analysis & Transcription (9.5h)' },
  { icon: '👁️', title: 'Vision Understanding & OCR' },
  { icon: '🎬', title: 'Video Processing (6h)' },
  { icon: '📄', title: 'PDF & Document Extraction' },
  { icon: '🎨', title: 'Image Generation (Imagen 4)' },
  { icon: '🎥', title: 'Video Generation (Veo 3)' },
];

export const AIMultimodalScene: React.FC = () => {
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
        accentColor={COLORS.aiMultimodal.primary}
        glowColor={COLORS.aiMultimodal.glow}
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
            name="ai-multimodal"
            accentColor={COLORS.aiMultimodal.primary}
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
            AI Multimodal
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
            Process and generate multimedia content using Google Gemini API with 2M token context
          </p>
        </div>

        {/* Feature Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
            marginTop: 20,
          }}
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              delay={0.4 + index * 0.15}
              accentColor={COLORS.aiMultimodal.primary}
            />
          ))}
        </div>

        {/* Tech badges */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            marginTop: 'auto',
          }}
        >
          {['Gemini 2.5', 'Imagen 4', 'Veo 3'].map((tech, i) => {
            const techFrame = Math.max(0, frame - (1.5 + i * 0.1) * fps);
            const techSpring = spring({
              frame: techFrame,
              fps,
              config: { damping: 200 },
            });
            const techOpacity = interpolate(techSpring, [0, 1], [0, 1]);

            return (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  background: `${COLORS.aiMultimodal.primary}15`,
                  border: `1px solid ${COLORS.aiMultimodal.primary}30`,
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.aiMultimodal.primary,
                  fontFamily: 'JetBrains Mono, monospace',
                  opacity: techOpacity,
                }}
              >
                {tech}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
