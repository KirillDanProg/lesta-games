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
        <div>
          <strong>тип:</strong> {ship.type?.title}
        </div>
        <div>
          <strong>страна:</strong> {ship.nation?.title}
        </div>
        <div>
          <strong>уровень:</strong> {ship.level}
        </div>
        <div>
          <strong>опсиание:</strong> <br />
          {ship.description}
        </div>
      </div>
    </div>
  );
};
