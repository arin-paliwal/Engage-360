import { ReactNode } from "react";

export interface childrenInterface {
  children: ReactNode;
}

export type AppAction =
  | { type: "SET_STATE"; payload: string }
  | { type: "SET_ADMIN_STATE"; payload: string }
  | { type: "SET_EMPLOYEE_STATE"; payload: string };

export interface ComponentState {
  state: React.SetStateAction<string>;
}
