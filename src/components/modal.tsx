/** biome-ignore-all lint/a11y/noStaticElementInteractions: Modal backdrop uses onClick for dismiss */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: Modal backdrop uses onClick for dismiss */
import { css } from '@emotion/css';
import { type FC, memo, type ReactNode, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '@/modules/theme/hooks/use-theme';

interface Props {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly children: ReactNode;
  readonly maxWidth?: number;
  readonly disableBackdropClose?: boolean;
}

const backdropClassName = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
`;

export const Modal: FC<Props> = memo(
  ({ isOpen, onClose, title, children, maxWidth = 420, disableBackdropClose = false }) => {
    const { colors } = useTheme();

    useEffect(() => {
      if (!isOpen || disableBackdropClose) return;

      const handleKeyDown = (event: globalThis.KeyboardEvent) => {
        if (event.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, disableBackdropClose]);

    const panelClassName = useMemo(
      () => css`
        background: ${colors.neutral[100]};
        border: 3px solid ${colors.accent.main};
        border-radius: 8px;
        padding: 24px;
        width: 100%;
        max-width: ${maxWidth}px;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      `,
      [colors, maxWidth],
    );

    const titleClassName = useMemo(
      () => css`
        font-size: 14px;
        font-weight: 700;
        color: ${colors.neutral[800]};
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 4px;
      `,
      [colors],
    );

    const dividerClassName = useMemo(
      () => css`
        border: none;
        border-top: 2px solid ${colors.neutral[300]};
        margin-bottom: 16px;
      `,
      [colors],
    );

    if (!isOpen) return null;

    return createPortal(
      <div className={backdropClassName} onClick={disableBackdropClose ? undefined : onClose}>
        <div className={panelClassName} onClick={e => e.stopPropagation()}>
          <p className={titleClassName}>{title}</p>
          <hr className={dividerClassName} />
          {children}
        </div>
      </div>,
      document.body,
    );
  },
);

Modal.displayName = 'Modal';
