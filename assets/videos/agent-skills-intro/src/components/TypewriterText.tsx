import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { COLORS } from '../styles';

type TypewriterTextProps = {
  text: string;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  delay?: number;
  charFrames?: number;
  showCursor?: boolean;
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  fontSize = 48,
  color = COLORS.textPrimary,
  fontWeight = 600,
  delay = 0,
  charFrames = 2,
  showCursor = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delayFrames = delay * fps;
  const effectiveFrame = Math.max(0, frame - delayFrames);

  // Calculate typed characters
  const typedChars = Math.min(
    text.length,
    Math.floor(effectiveFrame / charFrames)
  );
  const typedText = text.slice(0, typedChars);

  // Cursor blink
  const cursorOpacity = interpolate(
    (frame % 16),
    [0, 8, 16],
    [1, 0, 1],
    { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }
  );

  // Only show cursor if still typing or after typing
  const isTyping = typedChars < text.length;
  const showCursorNow = showCursor && effectiveFrame > 0;

  return (
    <span
      style={{
        fontSize,
        fontWeight,
        color,
        fontFamily: 'Inter, system-ui, sans-serif',
        display: 'inline-block',
      }}
    >
      {typedText}
      {showCursorNow && (
        <span
          style={{
            opacity: cursorOpacity,
            marginLeft: 2,
            color,
          }}
        >
          |
        </span>
      )}
    </span>
  );
};
