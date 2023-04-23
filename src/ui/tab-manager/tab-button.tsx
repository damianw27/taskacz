import React, { ReactElement } from 'react';
import css from '@ui/tab-manager/styles/tab-button.css';
import { TabDefinition } from '@ui/tab-manager/types/tab-definition';

interface TabButtonProps {
  tabDefinition: TabDefinition;
  isSelected: boolean;
  setSelectedTabId: (tabId: number) => void;
}

export const TabButton = (props: TabButtonProps): ReactElement => {
  const getTabButtonClassName = (): string =>
    props.isSelected ? `${css.tabButton} ${css.selectedTabButton}` : css.tabButton;

  return (
    <button className={getTabButtonClassName()} onClick={() => props.setSelectedTabId(props.tabDefinition.id)}>
      <div>{props.tabDefinition.icon}</div>
      <span>{props.tabDefinition.label}</span>
    </button>
  );
};
