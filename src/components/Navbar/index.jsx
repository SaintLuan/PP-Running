import React, {useEffect, useState} from 'react';
import {Nav, NavbarContainer, NavLogo, Logo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './styles';

import logo from '../../assets/img/logo_hor.png';

const Navbar = ({ toggle }) => {
    const [hasScroll, setHasScroll] = useState(false);

    useEffect(()=>{
        window.onscroll= ()=>{
            if(window.pageYOffset > 80)
                setHasScroll(true);
            else
                setHasScroll(false);
        }
    });
    return (
        <>
            <Nav className={hasScroll ? 'scrolled' : ''}>
                <NavbarContainer >
                    <NavLogo to='/'>
                        <Logo src={logo} alt='Logo PP Running' />
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Início</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='training'>Treinamento</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='events'>Eventos</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='contatc'>Contato</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">Faça parte deste time</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
