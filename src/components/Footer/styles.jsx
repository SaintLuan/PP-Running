import styled from "styled-components";

export const FooterContainer = styled.footer`

`;

export const ContainerTop = styled.section`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;
    color: #244A6F;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const TopLogo = styled.img`
    margin-left: 3rem;

    @media screen and (max-width: 480px){
        margin: unset;
    }
`;

export const TopNav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const NavItem = styled.li`
    margin: 0 25px;
    @media screen and (max-width: 480px){
        margin: 15px 0;

        &:first-child{
            margin-top: 25px;
        }
    }
`;

export const NavLinks = styled.a`

`;

export const TopCta = styled.a`
    margin-right: 3rem;

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

    @media screen and (max-width: 480px){
        margin: unset;
    }
`;

export const ContainerBottom = styled.section`
    width: 100%;
    margin: 1.75rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BottomText = styled.span`
    width: 40%;

    font-size: 15px;
    line-height: 25px;
    text-align: center;

    @media screen and (max-width: 480px){
        width: 95%;
        font-size: 12px;
    }
`;