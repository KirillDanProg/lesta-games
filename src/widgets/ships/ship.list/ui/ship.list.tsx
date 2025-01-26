import { Vehicle } from "@/__generated__/graphql";
import { useFilteredVehicles } from "@/features/filter.panel";
import { Modal } from "@/shared/ui";
import { memo, useState } from "react";
import { ShipCard } from "../../ship.card";
import { ShipDetails } from "../../ship.details/ui/ship.details";
import s from "./ship.list.module.scss";

type ShipListProps = {
  ships: Vehicle[];
};

export const ShipList = memo((props: ShipListProps) => {
  const { ships } = props;
  const { filteredVehicles } = useFilteredVehicles(ships);

  const [currentShip, setCurrentShip] = useState<Vehicle | null>(null);

  const onOpenShipDetailsModal = (ship: Vehicle) => {
    setCurrentShip(ship);
  };
  const onCloseModal = () => {
    setCurrentShip(null);
  };

  return (
    <div className={s.shipsContainer}>
      {!ships.length && <div className="plugText">ничего не найдено</div>}
      {!!ships.length &&
        filteredVehicles.map((ship, index) => {
          return <ShipCard key={`${ship?.id}${index}`} ship={ship} onOpenShipDetailsModal={onOpenShipDetailsModal} />;
        })}

      <Modal isOpen={!!currentShip} onClose={onCloseModal}>
        <ShipDetails ship={currentShip} />
      </Modal>
    </div>
  );
});
