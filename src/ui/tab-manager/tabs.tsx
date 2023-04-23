import React, { ReactElement, useState } from 'react';
import css from '@ui/tab-manager/styles/tab-bar.css';
import { TabButton } from '@ui/tab-manager/tab-button';
import { TabButtonGroup } from '@ui/tab-manager/tab-button-group';
import { TabDefinition } from '@ui/tab-manager/types/tab-definition';

interface TabManagerProps {
  definedTabs: TabDefinition[];
  defaultSelectedTabId: number;
}

export const TabManager = (props: TabManagerProps): ReactElement => {
  const [selectedTabId, setSelectedTabId] = useState<number>(0);

  const isTabSelected = (tabDefinition: TabDefinition): boolean => tabDefinition.id === selectedTabId;

  const renderSelectedTabContent = (): ReactElement => {
    const selectedTabInfo = props.definedTabs.find(isTabSelected);
    return selectedTabInfo?.content ?? <div />;
  };

  const getTab = (tabDefinition: TabDefinition, index: number): ReactElement => (
    <TabButton
      key={`tab-manager-header-item-${index}`}
      tabDefinition={tabDefinition}
      isSelected={tabDefinition.id === selectedTabId}
      setSelectedTabId={setSelectedTabId}
    />
  );

  const renderItems = (): ReactElement[] => props.definedTabs.map(getTab);

  return (
    <div className={css.tabs}>
      <TabButtonGroup>{renderItems()}</TabButtonGroup>
      <div className={css.tabContent}>{renderSelectedTabContent()}</div>
    </div>
  );
};
