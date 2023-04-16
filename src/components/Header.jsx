import React from 'react';
import { Nav, Logo, List, Item, LogoLink } from './styles';

const Header = () => {
  return (
    <Nav>
      <LogoLink to='/'>
        <Logo>
          NGHM
        </Logo>
      </LogoLink>
      <List>
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
    </Nav>
  );
};

export default Header;