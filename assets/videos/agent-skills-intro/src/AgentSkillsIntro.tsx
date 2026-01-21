import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { fade } from '@remotion/transitions/fade';
import { slide } from '@remotion/transitions/slide';
import { loadFont } from '@remotion/google-fonts/Inter';
import { loadFont as loadJetBrains } from '@remotion/google-fonts/JetBrainsMono';

import { IntroScene } from './scenes/IntroScene';
import { AIMultimodalScene } from './scenes/AIMultimodalScene';
import { AIArtistScene } from './scenes/AIArtistScene';
import { UIUXProMaxScene } from './scenes/UIUXProMaxScene';
import { OutroScene } from './scenes/OutroScene';

// Load fonts
const { fontFamily: interFont } = loadFont('normal', {
  weights: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const { fontFamily: jetbrainsFont } = loadJetBrains('normal', {
  weights: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const AgentSkillsIntro: React.FC = () => {
  const { fps } = useVideoConfig();

  // Scene durations in frames
  const introDuration = 3 * fps;      // 3 seconds
  const skillDuration = 6 * fps;      // 6 seconds per skill
  const outroDuration = 3 * fps;      // 3 seconds
  const transitionDuration = 15;      // 0.5 seconds

  return (
    <AbsoluteFill
      style={{
        fontFamily: interFont,
      }}
    >
      <TransitionSeries>
        {/* Intro Scene */}
        <TransitionSeries.Sequence durationInFrames={introDuration}>
          <IntroScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* AI Multimodal Scene */}
        <TransitionSeries.Sequence durationInFrames={skillDuration}>
          <AIMultimodalScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-right' })}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* AI Artist Scene */}
        <TransitionSeries.Sequence durationInFrames={skillDuration}>
          <AIArtistScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: 'from-right' })}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* UI/UX Pro Max Scene */}
        <TransitionSeries.Sequence durationInFrames={skillDuration}>
          <UIUXProMaxScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: transitionDuration })}
        />

        {/* Outro Scene */}
        <TransitionSeries.Sequence durationInFrames={outroDuration}>
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
