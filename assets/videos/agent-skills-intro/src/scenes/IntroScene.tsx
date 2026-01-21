import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { TypewriterText } from '../components/TypewriterText';
import { COLORS } from '../styles';

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo animation
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 200 },
  });

  const logoScale = interpolate(logoSpring, [0, 1], [0.5, 1]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);

  // Subtitle fade in
  const subtitleDelay = 0.8;
  const subtitleFrame = Math.max(0, frame - subtitleDelay * fps);
  const subtitleSpring = spring({
    frame: subtitleFrame,
    fps,
    config: { damping: 200 },
  });
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);
  const subtitleY = interpolate(subtitleSpring, [0, 1], [20, 0]);

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
          gap: 40,
        }}
      >
        {/* ClaudeKit Logo/Title */}
        <div
          style={{
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              background: 'linear-gradient(135deg, #7B68EE 0%, #00D4FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(123, 104, 238, 0.4)',
            }}
          >
            <span style={{ fontSize: 60, color: '#fff' }}>⚡</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: COLORS.textPrimary,
              fontFamily: 'Inter, system-ui, sans-serif',
              margin: 0,
              letterSpacing: '-0.03em',
            }}
          >
            ClaudeKit
          </h1>
        </div>

        {/* Subtitle with typewriter */}
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          <TypewriterText
            text="Agent Skills Collection"
            fontSize={36}
            color={COLORS.textSecondary}
            fontWeight={400}
            delay={1.2}
            charFrames={3}
          />
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: interpolate(logoSpring, [0, 1], [0, 200]),
            height: 2,
            background: 'linear-gradient(90deg, transparent, #7B68EE, transparent)',
            marginTop: 20,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
