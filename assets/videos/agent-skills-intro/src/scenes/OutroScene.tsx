import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { COLORS } from '../styles';

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Main content animation
  const mainSpring = spring({
    frame,
    fps,
    config: { damping: 200 },
  });
  const mainOpacity = interpolate(mainSpring, [0, 1], [0, 1]);
  const mainScale = interpolate(mainSpring, [0, 1], [0.95, 1]);

  // Skills badges animation
  const skills = [
    { name: 'ai-multimodal', color: COLORS.aiMultimodal.primary },
    { name: 'ai-artist', color: COLORS.aiArtist.primary },
    { name: 'ui-ux-pro-max', color: COLORS.uiUxProMax.primary },
  ];

  return (
    <AbsoluteFill>
      <AnimatedBackground
        accentColor="#7B68EE"
        glowColor="rgba(123, 104, 238, 0.3)"
      />

      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 50,
          opacity: mainOpacity,
          transform: `scale(${mainScale})`,
        }}
      >
        {/* CTA Text */}
        <h2
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: COLORS.textPrimary,
            fontFamily: 'Inter, system-ui, sans-serif',
            margin: 0,
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Supercharge Your Workflow
        </h2>

        {/* Skills summary */}
        <div
          style={{
            display: 'flex',
            gap: 24,
          }}
        >
          {skills.map((skill, i) => {
            const skillFrame = Math.max(0, frame - (0.3 + i * 0.15) * fps);
            const skillSpring = spring({
              frame: skillFrame,
              fps,
              config: { damping: 15, stiffness: 200 },
            });
            const skillScale = interpolate(skillSpring, [0, 1], [0.8, 1]);
            const skillOpacity = interpolate(skillSpring, [0, 1], [0, 1]);

            return (
              <div
                key={skill.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  background: `${skill.color}15`,
                  border: `2px solid ${skill.color}50`,
                  borderRadius: 50,
                  transform: `scale(${skillScale})`,
                  opacity: skillOpacity,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: skill.color,
                    boxShadow: `0 0 15px ${skill.color}`,
                  }}
                />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: skill.color,
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* GitHub link */}
        <div
          style={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 20,
              color: COLORS.textSecondary,
              fontFamily: 'Inter, system-ui, sans-serif',
            }}
          >
            Available in ClaudeKit
          </span>

          <div
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #7B68EE 0%, #00D4FF 100%)',
              borderRadius: 12,
              fontSize: 20,
              fontWeight: 600,
              color: '#fff',
              fontFamily: 'Inter, system-ui, sans-serif',
              boxShadow: '0 10px 40px rgba(123, 104, 238, 0.4)',
            }}
          >
            Get Started Today
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            fontSize: 14,
            color: COLORS.textMuted,
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          Powered by Claude Code
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
