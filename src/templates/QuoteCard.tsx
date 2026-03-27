import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { BRAND, FONTS_CSS, useFadeUp, useScaleIn } from "../brand";

export const QuoteCard: React.FC = () => {
  const quoteAnim = useScaleIn(10);
  const authorAnim = useFadeUp(30);
  const frame = useCurrentFrame();
  const lineWidth = interpolate(frame, [5, 25], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <style>{FONTS_CSS}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(201,168,76,0.06), transparent 70%)`,
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 70px",
        }}
      >
        {/* Opening quote mark */}
        <div
          style={{
            fontFamily: BRAND.fontDisplay,
            fontSize: 120,
            color: BRAND.gold,
            opacity: 0.15,
            lineHeight: 0.6,
            marginBottom: 16,
            ...quoteAnim,
          }}
        >
          "
        </div>

        {/* Quote text */}
        <div
          style={{
            fontFamily: BRAND.fontDisplay,
            fontSize: 52,
            color: BRAND.cream,
            textAlign: "center",
            lineHeight: 1.3,
            letterSpacing: -1,
            ...quoteAnim,
          }}
        >
          The future belongs
          <br />
          to <span style={{ color: BRAND.gold }}>builders.</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: lineWidth,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${BRAND.gold}, transparent)`,
            margin: "32px 0",
          }}
        />

        {/* Author */}
        <div
          style={{
            fontFamily: BRAND.fontMono,
            fontSize: 14,
            textTransform: "uppercase" as const,
            letterSpacing: 3,
            color: BRAND.cream30,
            ...authorAnim,
          }}
        >
          {BRAND.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
