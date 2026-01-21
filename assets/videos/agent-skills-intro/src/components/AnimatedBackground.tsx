import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS } from '../styles';

type BackgroundProps = {
  accentColor?: string;
  glowColor?: string;
};

export const AnimatedBackground: React.FC<BackgroundProps> = ({
  accentColor = COLORS.aiMultimodal.primary,
  glowColor = COLORS.aiMultimodal.glow,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle pulse animation
  const pulseProgress = Math.sin((frame / fps) * Math.PI * 0.5);
  const glowOpacity = interpolate(pulseProgress, [-1, 1], [0.2, 0.4]);
  const glowScale = interpolate(pulseProgress, [-1, 1], [0.9, 1.1]);

  // Grid animation
  const gridOffset = (frame * 0.5) % 100;

  return (
    <AbsoluteFill
      style={{
        background: COLORS.gradientPrimary,
        overflow: 'hidden',
      }}
    >
      {/* Animated grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${accentColor}10 1px, transparent 1px),
            linear-gradient(90deg, ${accentColor}10 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translateY(${gridOffset}px)`,
          opacity: 0.5,
        }}
      />

      {/* Central glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 800,
          height: 800,
          transform: `translate(-50%, -50%) scale(${glowScale})`,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: glowOpacity,
          filter: 'blur(60px)',
        }}
      />

      {/* Top-right accent glow */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${accentColor}30 0%, transparent 60%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Bottom-left accent glow */}
      <div
        style={{
          position: 'absolute',
          bottom: -200,
          left: -200,
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${accentColor}20 0%, transparent 60%)`,
          filter: 'blur(60px)',
        }}
      />
    </AbsoluteFill>
  );
};
