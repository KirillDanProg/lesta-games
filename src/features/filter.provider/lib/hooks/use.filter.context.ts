import { useContext } from "react";
import { FilterContext } from "../utils/create.context";

export const useFilterContext = () => {
  const filterContext = useContext(FilterContext);

  if (!filterContext) {
    throw new Error("useFilterContext should be used inside of FilterProvider");
  }

  return filterContext;
};
