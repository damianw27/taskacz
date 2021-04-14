import React, { InputHTMLAttributes, DetailedHTMLProps } from "react";
import { ReactElement } from "react";
import css from "./styles/TextBox.css";

type TextBoxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function TextBox(props: TextBoxProps): ReactElement {
  return <input className={css.taskInputText} type="text" {...props} />;
}
