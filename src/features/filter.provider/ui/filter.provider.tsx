import { classes, Filters, levels, nations, OnFilterChangeType } from "@/entities/ship";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { FilterContext } from "../lib/utils/create.context";

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const initialFilters: Filters = useMemo(
    () => ({
      nations,
      levels,
      classes,
    }),
    []
  );

  const [filters, setFilters] = useState(initialFilters);
  const isTouched = filters !== initialFilters;

  const onFilterChange: OnFilterChangeType = useCallback((key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const contextValue = { isTouched, initialFilters, filters, onFilterChange, resetFilters };

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};
