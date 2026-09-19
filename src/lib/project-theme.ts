import type { CSSProperties } from "react";

export type ProjectTheme = {
  accent: string;
  accentText: string;
  accentSurface: string;
  onAccent: string;
};

/** Neutral initial values until a project's palette is approved. */
const initialTheme: ProjectTheme = {
  accent: "#101010",
  accentText: "#101010",
  accentSurface: "#f5f5f5",
  onAccent: "#ffffff",
};

export function projectThemeStyle(theme: ProjectTheme = initialTheme): CSSProperties {
  return {
    "--project-accent": theme.accent,
    "--project-accent-text": theme.accentText,
    "--project-accent-surface": theme.accentSurface,
    "--project-on-accent": theme.onAccent,
  } as CSSProperties;
}
