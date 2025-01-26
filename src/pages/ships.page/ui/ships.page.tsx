import { FilterPanel } from "@/features/filter.panel";
import { FilterProvider } from "@/features/filter.provider";
import { SearchFilter } from "@/features/search.filter";
import { useVehicles } from "@/features/ships";
import { ShipList } from "@/widgets/ships/ship.list";
import { useMemo, useState } from "react";

const ShipsPage = () => {
  const { vehicles, loading } = useVehicles();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredByTitle = useMemo(
    () =>
      vehicles.filter(vehicle => {
        const title = vehicle?.title || "";
        return title.toLowerCase().includes(searchQuery);
      }),
    [searchQuery, vehicles]
  );
  const onFilterByTitle = (title: string) => setSearchQuery(title);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <FilterProvider>
          <SearchFilter onFilterByTitle={onFilterByTitle} />
          <FilterPanel />
          <ShipList ships={filteredByTitle} />
        </FilterProvider>
      )}
    </>
  );
};

export default ShipsPage;
