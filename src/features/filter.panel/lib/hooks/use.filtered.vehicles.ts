import { Vehicle } from "@/__generated__/graphql";
import { useFilterContext } from "@/features/filter.provider";
import { useMemo } from "react";
import { filterVehicles } from "../utils/filter";

export const useFilteredVehicles = (vehicles: Vehicle[]) => {
  const { filters, isTouched } = useFilterContext();

  const filteredVehicles = useMemo(() => {
    return filterVehicles(vehicles, filters, isTouched);
  }, [vehicles, filters, isTouched]);

  return {
    filteredVehicles,
  };
};
