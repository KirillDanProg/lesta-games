import { ChangeEventHandler, InputHTMLAttributes } from "react";
import s from "./input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  initialValue?: string;
  value: string;
  changeCallback: (value: string) => void;
};

export const Input = (props: InputProps) => {
  const { value, changeCallback, className, ...restProps } = props;

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
    changeCallback(event.currentTarget.value);
  };

  return <input value={value} onChange={onChangeHandler} className={`${className} ${s.input}`} {...restProps} />;
};
