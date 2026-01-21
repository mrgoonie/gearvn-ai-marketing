import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS } from '../styles';

type FeatureCardProps = {
  icon: string;
  title: string;
  delay?: number;
  accentColor?: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  delay = 0,
  accentColor = COLORS.aiMultimodal.primary,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delayFrames = delay * fps;
  const effectiveFrame = Math.max(0, frame - delayFrames);

  // Spring animation for entrance
  const springProgress = spring({
    frame: effectiveFrame,
    fps,
    config: { damping: 200 },
  });

  const translateY = interpolate(springProgress, [0, 1], [30, 0]);
  const opacity = interpolate(springProgress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 24px',
        background: COLORS.bgCard,
        borderRadius: 12,
        border: `1px solid ${COLORS.bgCardBorder}`,
        transform: `translateY(${translateY}px)`,
        opacity,
        boxShadow: `0 4px 24px rgba(0, 0, 0, 0.3), 0 0 40px ${accentColor}15`,
      }}
    >
      <span style={{ fontSize: 28 }}>{icon}</span>
      <span
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: COLORS.textPrimary,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {title}
      </span>
    </div>
  );
};
