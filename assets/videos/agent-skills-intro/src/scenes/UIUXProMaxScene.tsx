import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SkillBadge } from '../components/SkillBadge';
import { FeatureCard } from '../components/FeatureCard';
import { COLORS } from '../styles';

const FEATURES = [
  { icon: '🎨', title: '50+ UI Styles & Patterns' },
  { icon: '🎯', title: '97 Color Palettes' },
  { icon: '📝', title: '57 Font Pairings' },
  { icon: '♿', title: '99 UX Guidelines (WCAG)' },
  { icon: '📊', title: '25 Chart Types' },
  { icon: '⚡', title: '9 Tech Stacks Supported' },
];

const STACKS = [
  'React',
  'Next.js',
  'Vue',
  'Svelte',
  'Tailwind',
  'Flutter',
  'SwiftUI',
  'shadcn/ui',
];

export const UIUXProMaxScene: React.FC = () => {
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
        accentColor={COLORS.uiUxProMax.primary}
        glowColor={COLORS.uiUxProMax.glow}
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
            name="ui-ux-pro-max"
            accentColor={COLORS.uiUxProMax.primary}
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
            UI/UX Pro Max
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
            Design intelligence with searchable database and priority-based recommendations
          </p>
        </div>

        {/* Content layout */}
        <div style={{ display: 'flex', gap: 60, flex: 1 }}>
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
                accentColor={COLORS.uiUxProMax.primary}
              />
            ))}
          </div>

          {/* Tech stacks */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              minWidth: 320,
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
              Supported Stacks
            </span>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              {STACKS.map((stack, i) => {
                const stackFrame = Math.max(0, frame - (0.8 + i * 0.1) * fps);
                const stackSpring = spring({
                  frame: stackFrame,
                  fps,
                  config: { damping: 15, stiffness: 200 },
                });
                const stackScale = interpolate(stackSpring, [0, 1], [0.8, 1]);
                const stackOpacity = interpolate(stackSpring, [0, 1], [0, 1]);

                return (
                  <div
                    key={stack}
                    style={{
                      padding: '10px 18px',
                      background: COLORS.bgCard,
                      border: `1px solid ${COLORS.uiUxProMax.primary}40`,
                      borderRadius: 8,
                      fontSize: 16,
                      fontWeight: 500,
                      color: COLORS.textPrimary,
                      fontFamily: 'Inter, system-ui, sans-serif',
                      transform: `scale(${stackScale})`,
                      opacity: stackOpacity,
                    }}
                  >
                    {stack}
                  </div>
                );
              })}
            </div>

            {/* Priority note */}
            <div
              style={{
                marginTop: 20,
                padding: 20,
                background: `${COLORS.uiUxProMax.primary}10`,
                border: `1px solid ${COLORS.uiUxProMax.primary}30`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: COLORS.uiUxProMax.primary,
                  marginBottom: 8,
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                Priority-Based Rules
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: COLORS.textSecondary,
                  lineHeight: 1.5,
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                1. Accessibility (CRITICAL)
                <br />
                2. Touch & Interaction
                <br />
                3. Performance (HIGH)
                <br />
                4. Layout & Responsive
              </div>
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
