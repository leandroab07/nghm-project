import styled from 'styled-components';


export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: auto;
  background: ${props => props.theme};
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${props => props.theme};
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme};
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: ${props => props.theme};
`;

export const List = styled.ul`
  list-style: disc;
  margin-left: 2rem;
  color: ${props => props.theme};
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: ${props => props.theme};
`;

export const Link = styled.a`
  color: lightblue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;