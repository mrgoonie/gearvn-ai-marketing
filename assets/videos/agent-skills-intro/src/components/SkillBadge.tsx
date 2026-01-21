import { spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { COLORS } from '../styles';

type SkillBadgeProps = {
  name: string;
  accentColor: string;
  delay?: number;
};

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  accentColor,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delayFrames = delay * fps;
  const effectiveFrame = Math.max(0, frame - delayFrames);

  const springProgress = spring({
    frame: effectiveFrame,
    fps,
    config: { damping: 15, stiffness: 200 },
  });

  const scale = interpolate(springProgress, [0, 1], [0.8, 1]);
  const opacity = interpolate(springProgress, [0, 1], [0, 1]);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '12px 24px',
        background: `linear-gradient(135deg, ${accentColor}20 0%, ${accentColor}10 100%)`,
        border: `1px solid ${accentColor}50`,
        borderRadius: 50,
        transform: `scale(${scale})`,
        opacity,
        boxShadow: `0 0 30px ${accentColor}30`,
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: accentColor,
          boxShadow: `0 0 10px ${accentColor}`,
        }}
      />
      <span
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: accentColor,
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '-0.02em',
        }}
      >
        {name}
      </span>
    </div>
  );
};
