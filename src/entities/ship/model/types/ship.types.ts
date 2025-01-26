export type ShipType = WithIconsType & NationType & { title: string; description: string };

export type NationType = WithIconsType & {
  name: string;
  title: string;
  color: string;
  icons: IconsType;
};

export type WithIconsType = {
  icons: IconsType;
};

export type IconsType = {
  small?: string;
  medium?: string;
  large?: string;
};

export type VehicleType = WithIconsType & {
  name: string;
  title: string;
};
