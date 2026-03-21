import { css } from '@emotion/css';
import {
  type ChangeEvent,
  type FC,
  type KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Modal } from '@/components/modal';
import { useLocale } from '@/i18n/hooks/locale';
import { SearchIcon } from '@/icons/search-icon';
import { useTheme } from '@/modules/theme/hooks/use-theme';
import { getVerticalScrollbarStyle } from '@/modules/theme/utils/scrollbar-style';
import { useProjects } from '@/states/projects';
import type { Project } from '@/types/project';

interface Props {
  readonly isOpen: boolean;
  readonly currentProjectId: number | undefined;
  readonly onSelect: (projectId: number | undefined) => void;
  readonly onClose: () => void;
}

export const ProjectPickerModal: FC<Props> = memo(
  ({ isOpen, currentProjectId, onSelect, onClose }) => {
    const { t } = useLocale();
    const { colors } = useTheme();
    const projects = useProjects(state => state.projects);
    const [searchPhrase, setSearchPhrase] = useState('');
    const searchRef = useRef<HTMLInputElement>(null);

    const filteredProjects = useMemo(() => {
      if (!searchPhrase.trim()) return projects;
      const lower = searchPhrase.toLowerCase();
      return projects.filter(p => p.name.toLowerCase().includes(lower));
    }, [projects, searchPhrase]);

    useEffect(() => {
      if (isOpen) {
        setSearchPhrase('');
        setTimeout(() => searchRef.current?.focus(), 0);
      }
    }, [isOpen]);

    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setSearchPhrase(event.target.value);
    }, []);

    const handleSearchKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && filteredProjects.length === 1) {
          onSelect(filteredProjects[0]!.id);
        }
      },
      [filteredProjects, onSelect],
    );

    const searchContainerClassName = useMemo(
      () => css`
        display: flex;
        align-items: center;
        gap: 8px;
        background: ${colors.neutral[50]};
        border: 2px solid ${colors.neutral[400]};
        border-radius: 4px;
        padding: 0 10px;
        color: ${colors.neutral[600]};
        margin-bottom: 12px;

        &:focus-within {
          border-color: ${colors.accent.main};
          color: ${colors.accent.dark};
        }
      `,
      [colors],
    );

    const searchInputClassName = useMemo(
      () => css`
        flex: 1;
        border: none;
        background: transparent;
        outline: none;
        padding: 8px 0;
        font-size: 13px;
        color: ${colors.neutral[800]};

        &::placeholder {
          color: ${colors.neutral[500]};
        }
      `,
      [colors],
    );

    const listClassName = useMemo(
      () => css`
        display: flex;
        flex-direction: column;
        gap: 4px;
        overflow-y: auto;
        flex: 1;
        ${getVerticalScrollbarStyle(colors)}
      `,
      [colors],
    );

    const getOptionClassName = useCallback(
      (isSelected: boolean) => css`
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 12px;
        border-radius: 4px;
        border: 2px solid ${isSelected ? colors.accent.main : colors.neutral[300]};
        background: ${isSelected ? colors.accent.main : colors.neutral[200]};
        cursor: pointer;
        transition: border-color 0.12s ease, background 0.12s ease;
        font-size: 13px;
        font-weight: 600;
        color: ${isSelected ? colors.neutral[50] : colors.neutral[800]};
        text-align: left;
        width: 100%;

        &:hover {
          border-color: ${colors.accent.main};
          background: ${isSelected ? colors.accent.dark : colors.accent.light};
          color: ${isSelected ? colors.neutral[50] : colors.accent.dark};
        }
      `,
      [colors],
    );

    const colorDotClassName = useCallback(
      (color: string, isSelected: boolean) => css`
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${color};
        flex-shrink: 0;
        border: 1.5px solid ${isSelected ? 'rgba(255,255,255,0.4)' : colors.neutral[400]};
      `,
      [colors],
    );

    const emptyClassName = useMemo(
      () => css`
        font-size: 12px;
        color: ${colors.neutral[500]};
        text-align: center;
        padding: 16px 0;
      `,
      [colors],
    );

    const noProjectSelected = currentProjectId === undefined;

    return (
      <Modal isOpen={isOpen} onClose={onClose} title={t('projects.assignProject')} maxWidth={360}>
        <div className={searchContainerClassName}>
          <SearchIcon width="13px" height="13px" />
          <input
            ref={searchRef}
            type="text"
            className={searchInputClassName}
            placeholder={t('projects.searchPlaceholder')}
            value={searchPhrase}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
        </div>
        <div className={listClassName}>
          {!searchPhrase && (
            <button
              type="button"
              className={getOptionClassName(noProjectSelected)}
              onClick={() => onSelect(undefined)}
            >
              <span className={colorDotClassName(colors.neutral[400], noProjectSelected)} />
              {t('projects.noProject')}
            </button>
          )}
          {filteredProjects.length === 0 && searchPhrase ? (
            <p className={emptyClassName}>{t('projects.emptyState')}</p>
          ) : (
            filteredProjects.map((project: Project) => {
              const isSelected = currentProjectId === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  className={getOptionClassName(isSelected)}
                  onClick={() => onSelect(project.id)}
                >
                  <span className={colorDotClassName(project.color, isSelected)} />
                  {project.name}
                </button>
              );
            })
          )}
        </div>
      </Modal>
    );
  },
);

ProjectPickerModal.displayName = 'ProjectPickerModal';
