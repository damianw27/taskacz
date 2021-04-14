import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
} from "react";
import css from "./styles/Button.css";

type DefaultTextBoxProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface TextBoxProps extends DefaultTextBoxProps {
  isDanger?: boolean;
}

export default function Button(props: TextBoxProps): ReactElement {
  return <button className={getButtonClassName(props)} {...props}>{props.children}</button>;

  function getButtonClassName(props: TextBoxProps): string | undefined {
    return props.isDanger ? `${css.dwButton} ${css.danger}` : css.dwButton;
  }
}

Button.defaultProps = {
  isDanger: false,
}
