import { useFilterContext } from "@/features/filter.provider";
import FilterIcon from "@/shared/assets/icons/filter-icon.svg?react";
import { memo, useState } from "react";
import { ShipTypeCheckboxes } from "./classes.filter";
import s from "./filter.panel.module.scss";
import { LevelCheckboxes } from "./levels.filter";
import { NationCheckboxes } from "./nations.filter";

export const FilterPanel = memo(() => {
  const [toggle, setToggle] = useState(false);
  const { resetFilters, isTouched } = useFilterContext();

  return (
    <>
      {toggle && <div className={s.backdrop} onClick={() => setToggle(false)}></div>}

      <div className={s.filterPanelContainer}>
        <div className={s.filterControls}>
          <FilterIcon onClick={() => setToggle(prev => !prev)} width={24} height={24} className="icon" />
          {isTouched && <ResetFilters resetFilters={resetFilters} />}
        </div>

        <div className={`${s.filterPanel} ${toggle ? s.open : ""}`}>
          <div>
            <h4>Уровень</h4>
            <div className={s.panelUnit}>
              <LevelCheckboxes />
            </div>
          </div>
          <div>
            <h4>Класс</h4>
            <div className={s.panelUnit}>
              <ShipTypeCheckboxes />
            </div>
          </div>
          <div>
            <h4>Нация</h4>
            <div className={s.panelUnit}>
              <NationCheckboxes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

type ResetFiltersProps = {
  resetFilters: () => void;
};

const ResetFilters = (props: ResetFiltersProps) => {
  const { resetFilters } = props;

  return <button onClick={resetFilters}>сбросить все</button>;
};
