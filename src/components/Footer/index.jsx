import React from 'react';
import { FooterContainer, ContainerTop, ContainerBottom, TopLogo, TopNav, NavItem, NavLinks, TopCta, BottomText } from './styles';
import logo from '../../assets/img/logo_hor.png';

const Footer = () => {
    return (
        <FooterContainer>
            <ContainerTop>
                <TopLogo src={logo} alt='Logo PP Running'/>

                <TopNav>
                    <NavItem>
                        <NavLinks to='/'>Treinamento</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/'>Eventos</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/'>Contato</NavLinks>
                    </NavItem>
                </TopNav>

                <TopCta>Faça parte deste time</TopCta>
            </ContainerTop>

            <ContainerBottom>
                <BottomText>
                    Copyright © 2021. PP Running. Todos os direitos reservados.
                    Desenvolvido por mastercomps    
                </BottomText>
            </ContainerBottom>
        </FooterContainer>
    );
}

export default Footer;
