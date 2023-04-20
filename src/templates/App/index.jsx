import { Wrapper, Title, Paragraph, Subtitle, List, ListItem, Link } from './styles'
import React from 'react';

const Home = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <Wrapper theme={isDarkMode ? '#000F3B' : '#fff'}>
      <Title theme={isDarkMode ? 'lightgray' : 'black'}>Bem-vindo ao Núcleo de Genética Molecular e Humana</Title>
      <Paragraph theme={isDarkMode ? 'lightgray' : 'black'}>Nós somos um laboratório de pesquisa em genética molecular focado em compreender os processos biológicos envolvidos em doenças humanas. Nosso objetivo é avançar o conhecimento sobre a genética humana e desenvolver novas terapias para doenças genéticas.</Paragraph>
      <Subtitle theme={isDarkMode ? 'lightgray' : 'black'}>O que fazemos</Subtitle>
      <List theme={isDarkMode ? 'lightgray' : 'black'}>
        <ListItem theme={isDarkMode ? 'lightgray' : 'black'}>Estudos de genética molecular em doenças humanas</ListItem>
        <ListItem theme={isDarkMode ? 'lightgray' : 'black'}>Estudos oncológicos</ListItem>
        <ListItem theme={isDarkMode ? 'lightgray' : 'black'}>Desenvolvimento de novas tecnologias para análise genética</ListItem>
        <ListItem theme={isDarkMode ? 'lightgray' : 'black'}>Orientação de estudantes</ListItem>
        <ListItem theme={isDarkMode ? 'lightgray' : 'black'}>Divulgação científica</ListItem>
      </List>
      <Subtitle theme={isDarkMode ? 'lightgray' : 'black'}>Entre em contato</Subtitle>
      <Paragraph theme={isDarkMode ? 'lightgray' : 'black'}>Se você tem interesse em colaborar com o nosso laboratório ou deseja mais informações sobre as nossas pesquisas, por favor entre em contato conosco pelo e-mail: <Link href="mailto:teste@teste.com.br" theme={isDarkMode ? 'gray' : 'black'}>teste@teste.com.br</Link>.</Paragraph>
    </Wrapper>
  );
}

export default Home;
