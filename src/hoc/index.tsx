import React, { ComponentType, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_DELIMITER, TOKEN_KEY } from "../config";

const withAuthCheck = <P extends object>(
  WrappedComponent: ComponentType<P>,
  roleID: number,
) => {
  const HOC: React.FC<P> = (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem(TOKEN_KEY);

    useEffect(() => {
      if (!token || roleID.toString() !== token?.split(TOKEN_DELIMITER)[0]) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    }, [token, roleID, navigate]);

    if (loading) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuthCheck;
