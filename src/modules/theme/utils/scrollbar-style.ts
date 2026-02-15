import type { ThemeColors } from '@/modules/theme/types/theme-colors';

export const getVerticalScrollbarStyle = (colors: ThemeColors): string => `
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.neutral[300]};
    border: 1px solid ${colors.neutral[400]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.accent.main};
    border: 1px solid ${colors.accent.dark};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.accent.dark};
  }
`;
