import { ReactNode } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  // window.location.href = "/login";
  return children;
}
