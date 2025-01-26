import { Filters, OnFilterChangeType } from "@/entities/ship";

export type FilterContextType = {
  isTouched: boolean;
  initialFilters: Filters;
  filters: Filters;
  onFilterChange: OnFilterChangeType;
  resetFilters: () => void;
};
