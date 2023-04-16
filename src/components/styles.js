import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #4b4e6d;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Item = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  color: #4b4e6d;

  &:hover {
    color: #0077b6;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
`;
