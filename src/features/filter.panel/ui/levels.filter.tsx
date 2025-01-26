import { useFilterContext } from "@/features/filter.provider";
import { Checkbox } from "@/shared/ui/checkbox/checkbox";

export const LevelCheckboxes = () => {
  const { filters, onFilterChange } = useFilterContext();

  const onChangeHandler = (value: string, isChecked: boolean) => {
    const udpated = filters.levels.map(level => {
      return level.value === value ? { ...level, isChecked } : level;
    });

    onFilterChange("levels", udpated);
  };

  return (
    <>
      {filters.levels.map(({ value, label, isChecked }) => (
        <div key={value}>
          <Checkbox<string> label={label} value={value} isChecked={isChecked} onFilterChange={onChangeHandler} />
        </div>
      ))}
    </>
  );
};
