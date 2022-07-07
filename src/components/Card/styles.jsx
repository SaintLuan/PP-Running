import styled from "styled-components";
import { Colors } from '../../styles/DesignSystem';

export const CardContainer = styled.aside`
    width: calc((100%/3) - 3rem);
    height: 475px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    border-radius: 15px;

    &:nth-child(2){
        margin: 0 1.5rem;
    }
`;

export const CardImage = styled.figure`
    width: 100%;
    height: 65%;

    img{
        width: 100%;
        height: 100%;
    }

`;

export const CardTitle = styled.h2`
    height: 10%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    color: ${Colors.secondary};
`;

export const CardBody = styled.article`
    width: 100%;
    height: 20%;
    padding: 0 1rem 1.5rem 0;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    p{
        color: ${Colors.secondary};
        width: 65%;
        padding-left: 1rem;

        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 3; // Quantidade de linhas
        -webkit-box-orient: vertical; 
    }

`;