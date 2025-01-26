import { useFilterContext } from "@/features/filter.provider";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import s from "./filter.panel.module.scss";

export const NationCheckboxes = () => {
  const { filters, onFilterChange } = useFilterContext();

  const onChangeHandler = (value: string, isChecked: boolean) => {
    const udpated = filters.nations.map(nation => {
      return nation.value === value ? { ...nation, isChecked } : nation;
    });

    onFilterChange("nations", udpated);
  };

  return (
    <>
      {filters.nations.map(({ label, value, isChecked }) => (
        <div key={value}>
          <Checkbox<string>
            label={<img className={s.panelUnitImage} src={label} />}
            value={value}
            isChecked={isChecked}
            onFilterChange={onChangeHandler}
          />
        </div>
      ))}
    </>
  );
};
