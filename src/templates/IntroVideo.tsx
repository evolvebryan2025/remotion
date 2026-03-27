import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { BRAND, FONTS_CSS, useScaleIn, useFadeUp } from "../brand";

const AmbientGlow: React.FC = () => {
  const frame = useCurrentFrame();
  const scale = interpolate(Math.sin(frame / 25), [-1, 1], [1, 1.2]);
  const opacity = interpolate(Math.sin(frame / 25), [-1, 1], [0.2, 0.5]);
  return (
    <div
      style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)`,
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
      }}
    />
  );
};

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
        boxShadow: `0 0 10px rgba(201,168,76,0.3)`,
      }}
    />
  );
};

export const IntroVideo: React.FC = () => {
  const logoAnim = useScaleIn(5);
  const nameAnim = useFadeUp(20);
  const tagAnim = useFadeUp(35);
  const lineAnim = useFadeUp(15);

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <style>{FONTS_CSS}</style>
      <AmbientGlow />

      {/* Scene 1: Logo pulse (0 to 8s) */}
      <Sequence from={0} durationInFrames={240}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: `2px solid ${BRAND.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: BRAND.fontDisplay,
              fontSize: 48,
              color: BRAND.gold,
              marginBottom: 40,
              ...logoAnim,
            }}
          >
            D
          </div>

          {/* Divider line */}
          <div
            style={{
              width: 80,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)`,
              marginBottom: 32,
              ...lineAnim,
            }}
          />

          {/* Brand name */}
          <div
            style={{
              fontFamily: BRAND.fontDisplay,
              fontSize: 64,
              color: BRAND.cream,
              textAlign: "center",
              letterSpacing: -2,
              ...nameAnim,
            }}
          >
            {BRAND.name}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: BRAND.fontMono,
              fontSize: 16,
              textTransform: "uppercase" as const,
              letterSpacing: 4,
              color: BRAND.cream30,
              marginTop: 20,
              ...tagAnim,
            }}
          >
            {BRAND.tagline}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Scene 2: Fade out (8 to 15s) */}
      <Sequence from={240} durationInFrames={210}>
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
              color: BRAND.gold,
              textAlign: "center",
              letterSpacing: -1,
            }}
          >
            Build the future.
          </div>
        </AbsoluteFill>
      </Sequence>

      <ProgressBar />
    </AbsoluteFill>
  );
};
