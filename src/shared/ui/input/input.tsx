import { useDebounce } from "@/shared/lib/hooks/use.debounce";
import { ChangeEventHandler, useEffect, useState } from "react";
import s from "./input.module.scss";

type InputProps = {
  initialValue?: string;
  changeCallback: (value: string) => void;
};

export const Input = (props: InputProps) => {
  const { initialValue = "", changeCallback } = props;

  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce(value);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = event => {
    const value = event.currentTarget.value;
    setValue(value);
  };

  useEffect(() => {
    changeCallback(debouncedValue.toLowerCase());
  }, [debouncedValue]);

  return <input value={value} onChange={onChangeHandler} className={s.input} />;
};
