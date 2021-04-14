import React, { ReactElement } from "react";
import css from "./styles/TabButtonGroup.css";

interface TabButtonGroupProps {
  children: ReactElement[],
}

export default function TabButtonGroup(props: TabButtonGroupProps): ReactElement {
  return (
    <div className={css.tabButtonGroup}>
      {props.children}
    </div>
  );
}
