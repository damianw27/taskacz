import React, { ReactElement } from 'react';
import css from '@ui/tab-manager/styles/tab-button-group.css';

interface TabButtonGroupProps {
  children: ReactElement[];
}

export const TabButtonGroup = (props: TabButtonGroupProps): ReactElement => (
  <div className={css.tabButtonGroup}>{props.children}</div>
);
