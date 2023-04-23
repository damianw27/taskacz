import React, { ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TabManager } from '@ui/tab-manager/tabs';
import { TabDefinition } from '@ui/tab-manager/types/tab-definition';
import { Tasks } from '@ui/tasks/tasks';
import { ListCheckIcon } from '@ui/shared/icons/list-check-icon';

const View = (): ReactElement => {
  const [tabs, setTabs] = useState<TabDefinition[]>([]);

  const getTaskListTabDef = (): TabDefinition => ({
    id: 0,
    label: 'Tasks',
    icon: <ListCheckIcon />,
    content: <Tasks />,
  });

  useEffect(() => {
    const definedTabs: TabDefinition[] = [];
    definedTabs.push(getTaskListTabDef());
    setTabs(definedTabs);
  }, []);

  return <TabManager definedTabs={tabs} defaultSelectedTabId={0} />;
};

ReactDOM.render(<View />, document.getElementById('root'));
