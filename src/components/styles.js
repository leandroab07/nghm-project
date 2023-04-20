import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  padding: 1.5rem;
  background: ${props => props.theme};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding-left: 50px;
  padding-right: 50px;
`;

export const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxLogo = styled.div`
  background: white;
  background-color: white;
  border: solid 1.5px black;
  border-radius: 100px;
  box-shadow: 2px 2px 5px rgba(5, 5, 5, 0.4);
  padding: 20px;
`;

export const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, #000F9B, #a70267);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  position: relative;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;

  &:hover {
    color: lightblue;

    > ul {
      display: block;
    }
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonMode = styled.button`
  background: ${props => props.theme};
  border: none;
`
