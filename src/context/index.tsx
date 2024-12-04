import { createContext, useReducer, Dispatch, useContext } from "react";
import { AppAction, childrenInterface } from "../types/globals";

type AppState = {
  state: string;
  adminState: string;
  employeeState: string;
};

const initialState: AppState = {
  state: "",
  adminState: localStorage.getItem("adminState") || "Employee",
  employeeState: localStorage.getItem("employeeState") || "Attendance",
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, state: action.payload };
    case "SET_ADMIN_STATE":
      localStorage.setItem("adminState", action.payload);
      return { ...state, adminState: action.payload };
    case "SET_EMPLOYEE_STATE":
      localStorage.setItem("employeeState", action.payload);
      return { ...state, employeeState: action.payload };
    default:
      return state;
  }
};

type AppContextType = {
  state: AppState;
  dispatch: Dispatch<AppAction>;
};

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => {},
});

export const AppProvider = ({ children }: childrenInterface) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// const { state, dispatch } = useAppContext();

// const updateState = () => {
//   dispatch({ type: "SET_STATE", payload: "newState" });
// };

// const updateAdminState = () => {
//   dispatch({ type: "SET_ADMIN_STATE", payload: "adminNewState" });
// };
