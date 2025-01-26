import { useQuery } from "@apollo/client";
import { VEHICLES_QUERY } from "../../model/api/ships.query";

export const useVehicles = () => {
  const { loading, error, data } = useQuery(VEHICLES_QUERY);

  const vehicles = data?.vehicles?.filter(ship => !!ship);

  return {
    loading,
    error,
    vehicles: vehicles || [],
  };
};
