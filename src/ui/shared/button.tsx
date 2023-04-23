import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import css from './styles/button.css';

type DefaultTextBoxProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface TextBoxProps extends DefaultTextBoxProps {
  isDanger?: boolean;
}

export const Button = (props: TextBoxProps): ReactElement => {
  const getButtonClassName = (props: TextBoxProps): string | undefined =>
    props.isDanger ? `${css.dwButton} ${css.danger}` : css.dwButton;

  return (
    <button className={getButtonClassName(props)} {...props}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  isDanger: false,
};
