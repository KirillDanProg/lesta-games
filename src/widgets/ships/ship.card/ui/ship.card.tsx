import { Vehicle } from "@/__generated__/graphql";
import wavesBg from "@/shared/assets/images/waves.jpg";
import s from "./ship.card.module.scss";

type ShipCardProps = {
  ship: Vehicle;
};

const ShipCard = (props: ShipCardProps) => {
  const { ship } = props;

  return (
    <div key={ship.id} className={s.shipCardContainer}>
      <img src={ship.icons?.large} className={s.shipImage} />
      <ShipCardHeader ship={ship} />

      <div className={s.shipCard}>
        <img src={ship.nation?.icons?.large} className={s.nationFlag} />
        <img src={wavesBg} className={s.wavesImage} />
        <div className={s.shipCardInfo}>
          <div>
            тип: <span className={s.shipInfoValue}>{ship.type?.title}</span>
          </div>
          <div>
            страна: <span className={s.shipInfoValue}>{ship.nation?.title}</span>
          </div>
          <div className={s.level}>
            ур: <span className={s.shipInfoValue}>{ship.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

type ShipCardHeaderProps = {
  ship: Vehicle;
};
const ShipCardHeader = (props: ShipCardHeaderProps) => {
  const { ship } = props;

  return (
    <div className={s.shipCardHeader}>
      <h6 className={s.title}>{ship.title}</h6>
      <img src={ship.type?.icons?.default} className={s.shipTypeIcon} />
    </div>
  );
};

export default ShipCard;
