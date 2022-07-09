import styled from "styled-components";

export const Container = styled.section`
    padding: 8rem;
    display: flex;
    flex-flow: row;
    gap: 150px;

    @media screen and (max-width: 767px){
        padding: 2rem;
        flex-flow: column;
        gap: 0;
    }
`

export const Content = styled.section`
    display: flex;
    flex-flow: column;
`

export const ContainerTitle = styled.section`
    font-size: 20px;
    margin-bottom: 1.5rem;
`

export const ContainerSub = styled.section`
    font-size: 25px;
    font-weight: 500;
    color: #FE3CF4;
`

export const Text = styled.section`
    margin-top: 15px;
    font-size: 20px;
    color: #000;
`

export const Start = styled.h1`
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 800;
    color: #244A6F; 
    margin-top: 15px;
`

export const CardImage = styled.figure`
    width: 100%;
    height: 65%;
    margin-top: -70px;

    img{
        width: 68%;
        height: 100%;
    }

    @media screen and (max-width: 767px){
        margin-top: 10px;
    }

    @media screen and (max-width: 1024px){
        margin-top: 10px;

        img{
            width: 90%;
        }
    }

`;

export const Button = styled.a`
    width: 178px;
    margin-top: 1.5rem;

    border-radius: 0 20px 0 20px;
    background: #FE3CF4;
    color: #ffffff;
    font-weight: 700;

    white-space: nowrap;
    padding: 15px 28px;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
    }
`;