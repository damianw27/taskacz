import React, { ReactElement, useState } from "react";
import css from "./styles/TabBar.css";
import TabButton from "./TabButton";
import TabButtonGroup from "./TabButtonGroup";
import TabDefinition from "./types/TabDefinition";

interface TabManagerProps {
  definedTabs: TabDefinition[];
  defaultSelectedTabId: number;
}

export default function TabManager(props: TabManagerProps): ReactElement {
  const [selectedTabId, setSelectedTabId] = useState<number>(0);

  function isTabSelected(tabDefinition: TabDefinition): boolean {
    return tabDefinition.id === selectedTabId;
  }

  function renderSelectedTabContent(): ReactElement {
    const selectedTabInfo = props.definedTabs.find(isTabSelected);
    return selectedTabInfo !== undefined ? selectedTabInfo.content : <></>;
  }

  function getTab(tabDefinition: TabDefinition, index: number): ReactElement {
    return (
      <TabButton
        key={`tab-manager-header-item-${index}`}
        tabDefinition={tabDefinition}
        isSelected={tabDefinition.id === selectedTabId}
        setSelectedTabId={setSelectedTabId}
      />
    );
  }

  function renderItems(): ReactElement[] {
    return props.definedTabs.map(getTab);
  }

  return (
    <div className={css.tabs}>
      <TabButtonGroup>{renderItems()}</TabButtonGroup>
      <div className={css.tabContent}>{renderSelectedTabContent()}</div>
    </div>
  );
}
