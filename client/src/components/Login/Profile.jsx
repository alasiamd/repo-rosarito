import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, MenuButton, Button, Image, MenuList, MenuItem } from "@chakra-ui/react"; // Importa los componentes necesarios de Chakra UI
import { FiLogOut } from "react-icons/fi";

import styles from "../NavBar/NavBar.module.css";

const Profile = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  const handleLogout = () => {
    console.log("Realizando acciones antes de hacer logout...");
    logout({ returnTo: window.location.origin });
  };

  return (
    isAuthenticated && user && (
      <div className={styles.profile_zlksadaskj}>
        <Menu>
          <MenuButton as={Button} variant="flat" colorScheme="gray" size="sm">
            <Image src={user.picture} alt={`profile_${user.name}`} borderRadius="full" boxSize={8} objectFit="cover" />
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/profile">
              Perfil
            </MenuItem>
            <MenuItem onClick={handleLogout} icon={<FiLogOut />} command="⌘L">
              Cerrar sesión
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    )
  );
};

export default Profile;
