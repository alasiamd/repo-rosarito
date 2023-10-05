import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom"; // Utiliza useNavigate en lugar de useHistory

const LogoutButton = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const handleLogout = () => {
    console.log("Realizando acciones antes de hacer logout...");
    logout();
    navigate("/loggedout"); // Utiliza navigate para la redirección
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
