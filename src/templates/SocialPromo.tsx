import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { BRAND, FONTS_CSS, useFadeUp, useScaleIn, useSlideRight, useSlideLeft } from "../brand";

const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const pct = (frame / durationInFrames) * 100;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: `${pct}%`,
        height: 3,
        background: `linear-gradient(90deg, ${BRAND.goldDark}, ${BRAND.goldLight})`,
      }}
    />
  );
};

const Scene1Hook: React.FC = () => {
  const titleAnim = useScaleIn(5);
  const subAnim = useFadeUp(20);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
      }}
    >
      <div
        style={{
          fontFamily: BRAND.fontDisplay,
          fontSize: 72,
          color: BRAND.cream,
          textAlign: "center",
          letterSpacing: -2,
          lineHeight: 1.1,
          ...titleAnim,
        }}
      >
        Stop editing
        <br />
        <span style={{ color: BRAND.gold }}>manually.</span>
      </div>
      <div
        style={{
          fontFamily: BRAND.fontBody,
          fontSize: 30,
          color: BRAND.cream50,
          textAlign: "center",
          marginTop: 24,
          ...subAnim,
        }}
      >
        There is a better way.
      </div>
    </AbsoluteFill>
  );
};

const FeatureItem: React.FC<{
  icon: string;
  title: string;
  desc: string;
  delay: number;
  fromRight?: boolean;
}> = ({ icon, title, desc, delay, fromRight }) => {
  const slideRightAnim = useSlideRight(delay);
  const slideLeftAnim = useSlideLeft(delay);
  const anim = fromRight ? slideLeftAnim : slideRightAnim;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 20,
        marginBottom: 32,
        ...anim,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          border: `1px solid ${BRAND.cream10}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: BRAND.fontBody,
            fontSize: 32,
            fontWeight: 600,
            color: BRAND.cream,
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: BRAND.fontBody,
            fontSize: 24,
            color: BRAND.cream50,
            marginTop: 6,
            lineHeight: 1.4,
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};

const Scene2Features: React.FC = () => {
  const labelAnim = useFadeUp(0);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 70px",
      }}
    >
      <div
        style={{
          fontFamily: BRAND.fontMono,
          fontSize: 14,
          textTransform: "uppercase" as const,
          letterSpacing: 4,
          color: BRAND.gold,
          marginBottom: 32,
          ...labelAnim,
        }}
      >
        How it works
      </div>

      <FeatureItem
        icon="01"
        title="Describe your video"
        desc="Type what you want in plain English"
        delay={15}
      />
      <FeatureItem
        icon="02"
        title="AI writes the code"
        desc="Your free AI tool builds it for you"
        delay={40}
        fromRight
      />
      <FeatureItem
        icon="03"
        title="Export and share"
        desc="Render for YouTube, Reels, or TikTok"
        delay={65}
      />
    </AbsoluteFill>
  );
};

const Scene3CTA: React.FC = () => {
  const ctaAnim = useFadeUp(5);
  const subAnim = useFadeUp(20);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: `2px solid ${BRAND.gold}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: BRAND.fontDisplay,
          fontSize: 36,
          color: BRAND.gold,
          marginBottom: 32,
        }}
      >
        D
      </div>
      <div
        style={{
          fontFamily: BRAND.fontDisplay,
          fontSize: 48,
          color: BRAND.cream,
          textAlign: "center",
          letterSpacing: -1,
          lineHeight: 1.2,
          ...ctaAnim,
        }}
      >
        Start building
        <br />
        with <span style={{ color: BRAND.gold }}>code.</span>
      </div>
      <div
        style={{
          fontFamily: BRAND.fontMono,
          fontSize: 14,
          color: BRAND.cream30,
          textTransform: "uppercase" as const,
          letterSpacing: 3,
          marginTop: 24,
          ...subAnim,
        }}
      >
        {BRAND.name}
      </div>
    </AbsoluteFill>
  );
};

export const SocialPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <style>{FONTS_CSS}</style>

      {/* Scene 1: Hook (0 to 8s) */}
      <Sequence from={0} durationInFrames={240}>
        <Scene1Hook />
      </Sequence>

      {/* Scene 2: Features (8 to 22s) */}
      <Sequence from={240} durationInFrames={420}>
        <Scene2Features />
      </Sequence>

      {/* Scene 3: CTA (22 to 30s) */}
      <Sequence from={660} durationInFrames={240}>
        <Scene3CTA />
      </Sequence>

      <ProgressBar />
    </AbsoluteFill>
  );
};
