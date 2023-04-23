import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { ReactElement } from 'react';
import css from './styles/text-box.css';

type TextBoxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextBox = (props: TextBoxProps): ReactElement => (
  <input className={css.taskInputText} type="text" {...props} />
);
