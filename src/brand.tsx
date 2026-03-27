import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const BRAND = {
  black: "#050505",
  surface: "#0C0C0C",
  gold: "#C9A84C",
  goldDark: "#A58A3D",
  goldLight: "#D4B970",
  cream: "#F0EDE6",
  cream70: "rgba(240,237,230,0.7)",
  cream50: "rgba(240,237,230,0.5)",
  cream30: "rgba(240,237,230,0.3)",
  cream10: "rgba(240,237,230,0.1)",
  fontDisplay: "'Instrument Serif', Georgia, serif",
  fontBody: "'Outfit', system-ui, sans-serif",
  fontMono: "'JetBrains Mono', monospace",
  name: "Disruptors Media",
  tagline: "Empowering modern disruptors",
};

export const FONTS_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
`;

export function useFadeUp(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 100 },
  });
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px)`,
  };
}

export function useScaleIn(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 80 },
  });
  return {
    opacity: progress,
    transform: `scale(${interpolate(progress, [0, 1], [0.7, 1])})`,
  };
}

export function useSlideRight(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  return {
    opacity: progress,
    transform: `translateX(${interpolate(progress, [0, 1], [-60, 0])}px)`,
  };
}

export function useSlideLeft(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 90 },
  });
  return {
    opacity: progress,
    transform: `translateX(${interpolate(progress, [0, 1], [60, 0])}px)`,
  };
}
