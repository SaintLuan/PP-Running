import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    height : 100%;
    background: #ffffff;

    display: grid;
    align-items: center;
    top: 0;
    left: 0;

    transition: 0.5s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled.div`
    color: #244A6F;
`

export const Icon = styled.div`
    position: absolute;
    top: 2.75rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapp = styled.div`
    color: #244A6F;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #244A6F;
    cursor: pointer;

    &:hover{
        color: #FE3CF4;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 0 20px 0 20px;
    background: #FE3CF4;
    white-space: nowrap;
    padding: 15px 50px;

    color: #ffffff;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #FE3CF4;
    }
`