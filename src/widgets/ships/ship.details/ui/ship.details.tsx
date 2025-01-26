import { Vehicle } from "@/__generated__/graphql";
import s from "./ship.details.module.scss";

type ShipDetailsProps = {
  ship: Vehicle | null;
};

export const ShipDetails = (props: ShipDetailsProps) => {
  const { ship } = props;

  if (!ship) {
    return null;
  }

  return (
    <div>
      <img src={ship.icons?.large} />

      <div className={s.shipDetailsInfo}>
        <div>тип: {ship.type?.title}</div>
        <div>страна: {ship.nation?.title}</div>
        <div>уровень: {ship.level}</div>
        <div>
          опсиание: <br />
          {ship.description}
        </div>
      </div>
    </div>
  );
};
