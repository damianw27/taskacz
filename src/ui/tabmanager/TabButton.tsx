import React, { ReactElement } from "react";
import css from "./styles/TabButton.css";
import TabDefinition from "./types/TabDefinition";

interface TabButtonProps {
  tabDefinition: TabDefinition;
  isSelected: boolean;
  setSelectedTabId: (tabId: number) => void;
}

export default function TabButton(props: TabButtonProps): ReactElement {
  return (
    <button
      className={getTabButtonClassName()}
      onClick={() => props.setSelectedTabId(props.tabDefinition.id)}
    >
      <div>{props.tabDefinition.icon}</div>
      <span>{props.tabDefinition.label}</span>
    </button>
  );

  function getTabButtonClassName(): string {
    return props.isSelected
      ? `${css.tabButton} ${css.selectedTabButton}`
      : css.tabButton;
  }
}
