import React from "react";
import { Composition } from "remotion";
import { IntroVideo } from "./templates/IntroVideo";
import { BulletPoints } from "./templates/BulletPoints";
import { QuoteCard } from "./templates/QuoteCard";
import { SocialPromo } from "./templates/SocialPromo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="IntroVideo"
        component={IntroVideo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="BulletPoints"
        component={BulletPoints}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="QuoteCard"
        component={QuoteCard}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="SocialPromo"
        component={SocialPromo}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
