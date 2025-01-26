import { Vehicle } from "@/__generated__/graphql";
import { useFilteredVehicles } from "@/features/filter.panel";
import { memo } from "react";
import { ShipCard } from "../../ship.card";
import s from "./ship.list.module.scss";

type ShipListProps = {
  ships: Vehicle[];
};

export const ShipList = memo((props: ShipListProps) => {
  const { ships } = props;
  const { filteredVehicles } = useFilteredVehicles(ships);

  return (
    <div className={s.shipsContainer}>
      {!ships.length && <div>ничего не найдено</div>}
      {!!ships.length &&
        filteredVehicles.map((ship, index) => {
          return <ShipCard key={`${ship?.id}${index}`} ship={ship} />;
        })}
    </div>
  );
});
