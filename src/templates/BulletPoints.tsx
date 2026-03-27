import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import { BRAND, FONTS_CSS, useFadeUp, useSlideRight } from "../brand";

const BulletItem: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const anim = useSlideRight(delay);
  return (
    <div style={{ marginBottom: 24, ...anim }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: BRAND.gold,
            flexShrink: 0,
            boxShadow: `0 0 12px rgba(201,168,76,0.3)`,
          }}
        />
        <div
          style={{
            fontFamily: BRAND.fontBody,
            fontSize: 38,
            color: BRAND.cream,
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          {text}
        </div>
      </div>
      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${BRAND.cream10}, transparent)`,
          marginTop: 20,
          marginLeft: 32,
        }}
      />
    </div>
  );
};

export const BulletPoints: React.FC = () => {
  const titleAnim = useFadeUp(5);
  const labelAnim = useFadeUp(0);

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <style>{FONTS_CSS}</style>

      {/* Scene 1: Title (0 to 10s) */}
      <Sequence from={0} durationInFrames={300}>
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
              fontFamily: BRAND.fontMono,
              fontSize: 14,
              textTransform: "uppercase" as const,
              letterSpacing: 4,
              color: BRAND.gold,
              marginBottom: 20,
              ...labelAnim,
            }}
          >
            What We Do
          </div>
          <div
            style={{
              fontFamily: BRAND.fontDisplay,
              fontSize: 62,
              color: BRAND.cream,
              textAlign: "center",
              letterSpacing: -2,
              lineHeight: 1.1,
              ...titleAnim,
            }}
          >
            Three things that
            <br />
            <span style={{ color: BRAND.gold }}>set us apart</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 2: Bullets (10 to 25s) */}
      <Sequence from={300} durationInFrames={450}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 70px",
          }}
        >
          <BulletItem text="We build with AI, not against it" delay={10} />
          <BulletItem text="We scale with systems, not hustle" delay={40} />
          <BulletItem text="We disrupt the norm, every day" delay={70} />
        </AbsoluteFill>
      </Sequence>

      {/* Scene 3: Outro (25 to 30s) */}
      <Sequence from={750} durationInFrames={150}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: BRAND.fontDisplay,
              fontSize: 48,
              color: BRAND.cream,
              textAlign: "center",
              letterSpacing: -1,
            }}
          >
            {BRAND.name}
          </div>
          <div
            style={{
              fontFamily: BRAND.fontMono,
              fontSize: 14,
              color: BRAND.cream30,
              textTransform: "uppercase" as const,
              letterSpacing: 3,
              marginTop: 16,
            }}
          >
            {BRAND.tagline}
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
