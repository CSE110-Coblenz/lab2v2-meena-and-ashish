// src/animation.ts
export type Style = "bold" | "italic";

export function announce(feature: string, style: Style = "bold"): void {
  const start = style === "bold" ? "\x1b[1m" : "\x1b[3m";
  const reset = "\x1b[0m";
  console.log(`${start}Party! Party! Party! - ${feature}${reset}`);
}
