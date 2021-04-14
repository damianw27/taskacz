import { ReactElement } from "react";

export default interface TabDefinition {
  id: number;
  icon: ReactElement;
  label: string;
  content: ReactElement;
}
