import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    margin: 2rem 0;
`

export const ContainerHeader = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`

export const ContainerTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    color: #244A6F; 

    @media screen and (max-width: 480px){
        font-size: 1.3rem;
        text-align: center;
    }
`
export const FocusTitle = styled.span`
    color: #FE3CF4;
`

export const ContainerSub = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: #244A6F; 
    margin-top: 10px;
    @media screen and (max-width: 480px){
        font-size: .9rem;
    }
`

export const ContainerContent = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 2rem 0;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`
