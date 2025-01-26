import { createContext } from "react";
import type { FilterContextType } from "../../model/types/filter.context.types";

export const FilterContext = createContext<FilterContextType | null>(null);
