export enum Routes {
  HOME = "home",
  SHIPS = "ships",
  SHIP_DETAILS = "ships_details",
  ERROR = "error",
}

export const RoutePath = {
  [Routes.HOME]: "/",
  [Routes.SHIPS]: "/ships",
  [Routes.SHIP_DETAILS]: "/ships/:id",
  [Routes.ERROR]: "*",
};
