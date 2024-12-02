import { FC } from "react";

export interface RouteConfigInterface {
  path: string;
  Component: FC;
  isPrivate: boolean;
}
