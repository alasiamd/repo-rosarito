import React, { useState } from 'react';
import { Box, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorMode, Center } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../images/logo.png';
import style from '../NavBar/NavBar.module.css';
import { useNavigate } from 'react-router-dom';
import Profile from '../Login/Profile';
import { useAuth0 } from '@auth0/auth0-react';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleToggleColorMode = () => {
    if (colorMode === 'light') {
      toggleColorMode('dark');
    } else {
      toggleColorMode('light');
    }
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleSearch = () => {
    if (searchText) {
      navigate(`/home?search=${searchText}`);
    }
  };

  return (
    <div className={style.navbar} style={{ backgroundColor: colorMode === 'light' ? '#FFFFFF' : '#1A202C' }}>
      <div className={style.logo}>
        <img src={logo} alt="logo" width={'150px'} height={'150px'} />
      </div>
      <h1 className={style.title}>Bienvenidos a Muebles Rosarito</h1>
      <div className={style.rightSection}>
        <Box>
          <Button onClick={handleToggleColorMode} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
        {isAuthenticated ? (
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              _hover={{ bg: 'transparent' }}
              _expanded={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
            >
              <Profile size="sm" />
            </MenuButton>
            <MenuList alignItems={'center'} bg={colorMode === 'light' ? 'white' : '#1A202C'}>
              <br />
              <Center>
                <Profile size="xl" />
              </Center>
              <br />
              <Center>
                <p>muebles-rosarito</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>muebles-rosarito@gmail.com</MenuItem>
              <MenuItem></MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            variant="solid"
            bg="blue.500"
            color="white"
            _hover={{ bg: 'blue.600' }}
            onClick={loginWithRedirect}
          >
            Login
          </Button>
        )}
        <input
          type="text"
          placeholder="Buscar..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
}
