import React from 'react';
import { Nav, NavList, Logo, List, Item, LogoLink, BoxLogo, ButtonMode } from './styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <Nav theme={isDarkMode ? '#066699': '#000F3B'}>
      <NavList>
        <List>
          <LogoLink to='/'>
            <BoxLogo>
              <Logo>
                NGHM
              </Logo>
            </BoxLogo>
          </LogoLink>
          <Item>
            <LogoLink to='/'>
              Página Inicial
            </LogoLink>
          </Item>
          <Item>
            <LogoLink to='/group'>
              Equipe
            </LogoLink>
          </Item>
          <Item>
            <LogoLink to='/jobs'>
              Trabalhos
            </LogoLink>
          </Item>
          <Item>
            <LogoLink to='/contact'>
              Fale Conosco
            </LogoLink>
          </Item>
        </List>

      </NavList>

      <ButtonMode onClick={onToggleDarkMode} theme={isDarkMode ? '#066699': '#000F3B'}>
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </ButtonMode>
    </Nav>
  );
};

export default Header;