import React from 'react';
import logo from '.././assets/logo.png';
import logoCasa from '../assets/logocasa.png';
import styled from 'styled-components';


const Footer = styled.footer`
align-content: center;
align-items: center;
background: linear-gradient(-80deg, #8DA533 0%, #93A64C 50%, #748536 99%);
bottom: 0;
display: flex;
left: 0;
position: fixed;
height: 150px;
justify-content: center;
width: 100%;
z-index: 1000;
`;

const LogoImage = styled.img`
    width: 150.31px;
    height: 56px;
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const MyFooter: React.FC = () => {
    return (
        <Footer>
            <LogoContainer>

                <LogoImage src={logoCasa} alt="Logo casa" />
                <LogoImage src={logo} alt="Logo" />

            </LogoContainer>

        </Footer>


    );
}
export default MyFooter;