import { Composition, Folder } from 'remotion';
import { AgentSkillsIntro } from './AgentSkillsIntro';
import { IntroScene } from './scenes/IntroScene';
import { AIMultimodalScene } from './scenes/AIMultimodalScene';
import { AIArtistScene } from './scenes/AIArtistScene';
import { UIUXProMaxScene } from './scenes/UIUXProMaxScene';
import { OutroScene } from './scenes/OutroScene';

// Video settings
const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

// Scene durations in frames
const INTRO_DURATION = 3 * FPS;
const SKILL_DURATION = 6 * FPS;
const OUTRO_DURATION = 3 * FPS;
const TRANSITION_DURATION = 15;

// Total duration calculation
// Intro + 3 skills + outro - 4 transitions (overlaps)
const TOTAL_DURATION =
  INTRO_DURATION +
  SKILL_DURATION * 3 +
  OUTRO_DURATION -
  TRANSITION_DURATION * 4;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Main composition */}
      <Composition
        id="AgentSkillsIntro"
        component={AgentSkillsIntro}
        durationInFrames={TOTAL_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Individual scenes for preview/testing */}
      <Folder name="Scenes">
        <Composition
          id="IntroScene"
          component={IntroScene}
          durationInFrames={INTRO_DURATION}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="AIMultimodalScene"
          component={AIMultimodalScene}
          durationInFrames={SKILL_DURATION}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="AIArtistScene"
          component={AIArtistScene}
          durationInFrames={SKILL_DURATION}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="UIUXProMaxScene"
          component={UIUXProMaxScene}
          durationInFrames={SKILL_DURATION}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="OutroScene"
          component={OutroScene}
          durationInFrames={OUTRO_DURATION}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
    </>
  );
};
