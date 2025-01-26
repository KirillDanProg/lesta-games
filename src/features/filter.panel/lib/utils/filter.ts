import { Vehicle } from "@/__generated__/graphql";
import { FilterItem, Filters } from "@/entities/ship";

export const filterVehicles = (ships: Vehicle[], filters: Filters, isTouched: boolean): Vehicle[] => {
  if (!isTouched) {
    return ships;
  }
  const { nations, levels, classes } = filters;

  const findMatches = (array: FilterItem[], target?: string | null) => {
    if (!target) {
      return true;
    }

    return !!array.find(item => item.isChecked && item.value === target);
  };

  const isFiltersApplied = (filters: FilterItem[]) => {
    return filters.some(filter => filter.isChecked);
  };

  return ships.filter(ship => {
    const matchesNation = !isFiltersApplied(nations) || findMatches(nations, ship.nation?.name);
    const matchesLevel = !isFiltersApplied(levels) || findMatches(levels, String(ship.level));
    const matchesShipType = !isFiltersApplied(classes) || findMatches(classes, ship.type?.name);

    return matchesLevel && matchesShipType && matchesNation;
  });
};
