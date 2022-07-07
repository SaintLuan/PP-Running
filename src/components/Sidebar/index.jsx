import React from 'react';
import { CloseIcon, SidebarContainer, Icon, SidebarWrapp, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './styles';


const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapp>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Início</SidebarLink>
                    <SidebarLink to="training" onClick={toggle}>Treinamento</SidebarLink>
                    <SidebarLink to="events" onClick={toggle}>Eventos</SidebarLink>
                    <SidebarLink to="contatc" onClick={toggle}>Contato</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/signin">Faça parte deste time</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapp>
        </SidebarContainer>

    )
}

export default Sidebar
