import React, { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuthCheck = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const HOC: React.FC<P> = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        navigate("/login");
      }
    }, [navigate]);

    const token = localStorage.getItem("access_token");
    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuthCheck;
