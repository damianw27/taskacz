export interface SharedIconProps {
  readonly width?: string | number;
  readonly height?: string | number;
  readonly onClick?: () => void;
}

export const defaultSharedIconProps: Partial<SharedIconProps> = {
  width: '16',
  height: '16',
  onClick: () => {},
};
