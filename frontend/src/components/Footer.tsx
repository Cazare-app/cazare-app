import React from 'react';
import logo from '../assets/logo.png';
import logoCasa from '../assets/logocasa.png';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(-80deg, #8DA533 0%, #93A64C 50%, #748536 99%);
  width: 100%;
  padding: 20px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 20px;
`;

const Title = styled.h6`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 9px;
  color: white;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #cce7b0;
  }
`;
const LogoSection = styled.div`
  width: 100%;
  background-color: #93A64C;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 56px;
`;


const MyFooter: React.FC = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Section>
          <Title>Conheça-nos</Title>
          <Link href="#">Sobre a Cazare</Link>
          <Link href="#">Trabalhe Conosco</Link>
          <Link href="#">Acessibilidade</Link>
        </Section>

        <Section>
          <Title>Anuncie seu espaço</Title>
          <Link href="#">Casa</Link>
          <Link href="#">Pousada</Link>
        </Section>

        <Section>
          <Title>Deixe-nos ajudar você</Title>
          <Link href="#">Sua Conta</Link>
          <Link href="#">Histórico de Hospedagens</Link>
          <Link href="#">Reembolsos</Link>
          <Link href="#">Ajuda</Link>
        </Section>

      </ContentContainer>

      <LogoSection>
      <LogoContainer>
        <LogoImage src={logoCasa} alt="Logo casa" />
        <LogoImage src={logo} alt="Logo" />
      </LogoContainer>
      </LogoSection>

    </FooterContainer>
  );
};

export default MyFooter;
