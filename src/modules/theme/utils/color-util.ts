export const adjustColor = (hex: string, percent: number): string => {
  const num = Number.parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const Red = Math.max(Math.min((num >> 16) + amt, 255), 0);
  const Green = Math.max(Math.min(((num >> 8) & 0x00ff) + amt, 255), 0);
  const Blue = Math.max(Math.min((num & 0x0000ff) + amt, 255), 0);
  return `#${(0x1000000 + Red * 0x10000 + Green * 0x100 + Blue).toString(16).slice(1)}`;
};

export const hexToRgba = (hex: string, alpha: number): string => {
  const num = Number.parseInt(hex.replace('#', ''), 16);
  const Red = num >> 16;
  const Green = (num >> 8) & 0x00ff;
  const Blue = num & 0x0000ff;
  return `rgba(${Red}, ${Green}, ${Blue}, ${alpha})`;
};

export const isDarkBackground = (hex: string): boolean => {
  const num = Number.parseInt(hex.replace('#', ''), 16);
  const Red = num >> 16;
  const Green = (num >> 8) & 0x00ff;
  const Blue = num & 0x0000ff;
  const luminance = (0.299 * Red + 0.587 * Green + 0.114 * Blue) / 255;
  return luminance < 0.5;
};
