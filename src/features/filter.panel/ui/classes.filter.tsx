import { useFilterContext } from "@/features/filter.provider";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";
import s from "./filter.panel.module.scss";

export const ShipTypeCheckboxes = () => {
  const { filters, onFilterChange } = useFilterContext();

  const onChangeHandler = (value: string, isChecked: boolean) => {
    const udpated = filters.classes.map(shipClass => {
      return shipClass.value === value ? { ...shipClass, isChecked } : shipClass;
    });

    onFilterChange("classes", udpated);
  };

  return (
    <>
      {filters.classes.map(({ label, value, isChecked }) => (
        <div key={value} className={s.panelUnitContainer}>
          <Checkbox<string>
            label={<img src={label} className={s.panelUnitImage} />}
            value={value}
            isChecked={isChecked}
            onFilterChange={onChangeHandler}
          />
        </div>
      ))}
    </>
  );
};
