import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: transparent;
    width: 100%;
    /* height: 80px; */
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    
    position: sticky;
    top:0;
    z-index: 10;
    transition: 0.8s all ease;

    &.scrolled{
        background: #ffffff;
    }

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index: 1;
    max-width: 100%;
`

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    display: flex;
    align-items: center;
    cursor: poiter;
    margin-left: 5rem;

    @media screen and (max-width: 480px){
        margin-left: 2rem;
    }
`

export const Logo = styled.img`

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 1.5rem;
        right: 0;

        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #244A6F;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    text-align: center;
    margin-right: 5rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #244A6F;
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 5rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 0 20px 0 20px;
    background: #FE3CF4;
    color: #ffffff;
    font-weight: 700;

    white-space: nowrap;
    padding: 15px 22px;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;

    }
`