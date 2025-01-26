import React from "react";
import styled from "styled-components";

const Header = styled.header`
    background: linear-gradient(-80deg, #8DA533 0%, #93A64C 50%, #748536 99%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: right;
    gap: 0.5rem;
`;

const LogoImage = styled.img`
    width: 50px;
    height: auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const Button = styled.button`
    background-color: #ECEFDF;
    text-color: #8DA533;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #93A64C;
    }
`;

const MyHeader: React.FC = () => {
    return (
        <Header>
            <LogoContainer>
                <LogoImage src="/assets/logo casa.png" alt="Logo casa" />
                <LogoImage src="/assets/logo.png" alt="Logo" />
                <h1>Cazare</h1>
            </LogoContainer>
            <ButtonContainer>
                <Button>Anuncie seu espaço</Button>
                <Button>Cadastre-se</Button>
                <Button>Login</Button>
            </ButtonContainer>
        </Header>
    );
};

export default MyHeader;