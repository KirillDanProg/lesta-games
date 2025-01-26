import { ChangeEventHandler, ReactElement } from "react";
import s from "./checkbox.module.scss";

type CheckboxProps<T> = {
  label: string | ReactElement;
  value: T;
  isChecked: boolean;
  onFilterChange: (value: T, isChecked: boolean) => void;
};

export const Checkbox = <T,>(props: CheckboxProps<T>) => {
  const { label, value, onFilterChange, isChecked } = props;

  // const [checked, setChecked] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    const isChecked = event.currentTarget.checked;
    // setChecked(isChecked);
    onFilterChange(value, isChecked);
  };

  return (
    <div className={s.checkboxContainer}>
      <input id={`${value}`} checked={isChecked} onChange={onChange} type="checkbox" className={s.checkbox} />
      <label htmlFor={`${value}`}>{label || ""}</label>
    </div>
  );
};
