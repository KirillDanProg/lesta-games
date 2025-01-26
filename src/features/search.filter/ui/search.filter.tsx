import CloseIcon from "@/shared/assets/icons/close-icon.svg?react";
import { useDebounce } from "@/shared/lib/hooks/use.debounce";
import { Input } from "@/shared/ui";
import { useEffect, useState } from "react";
import s from "./search.filter.module.scss";

type SearchFilterProps = {
  onFilterByTitle: (title: string) => void;
};

export const SearchFilter = (props: SearchFilterProps) => {
  const { onFilterByTitle } = props;

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const changeCallback = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    onFilterByTitle(debouncedValue.toLowerCase().trim());
  }, [debouncedValue]);

  const onClearSearchFilter = () => {
    setValue("");
  };

  return (
    <div className={s.searchFilterContainer}>
      <CloseIcon className={s.closeIcon} onClick={onClearSearchFilter} />
      <Input value={value} changeCallback={changeCallback} className={s.searchFilterInput} />
    </div>
  );
};
