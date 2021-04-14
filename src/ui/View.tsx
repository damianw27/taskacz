import ListIcon from "@material-ui/icons/List";
import React, { ReactElement, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import TabManager from "./tabmanager/Tabs";
import TabDefinition from "./tabmanager/types/TabDefinition";
import Tasks from "./tasks/Tasks";

export default function View(): ReactElement {
  const [tabs, setTabs] = useState<TabDefinition[]>([]);

  function getTaskListTabDef(): TabDefinition {
    return {
      id: 0,
      label: "Tasks",
      icon: <ListIcon />,
      content: <Tasks />,
    };
  }

  function onComponentMount() {
    const definedTabs: TabDefinition[] = [];
    definedTabs.push(getTaskListTabDef());
    setTabs(definedTabs);
  }

  useEffect(onComponentMount, []);

  return <TabManager definedTabs={tabs} defaultSelectedTabId={0} />;
}

ReactDOM.render(<View />, document.getElementById("root"));
