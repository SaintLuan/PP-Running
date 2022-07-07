import React from 'react';
import Card from '../../../components/Card';
import {Container, ContainerHeader, ContainerContent, ContainerSub, ContainerTitle, FocusTitle} from './styles'

import img01 from '../../../assets/img/midia-01.png';
import img02 from '../../../assets/img/midia-02.png';
import img03 from '../../../assets/img/midia-03.png';

export const Exercises = ()=>{
    return(
        <Container>
            <ContainerHeader>
                <ContainerTitle>
                    Exercícios focados para <FocusTitle>melhorar</FocusTitle> seu <FocusTitle>desempenho</FocusTitle>
                </ContainerTitle>
                <ContainerSub>O treinamento que você precisa está aqui </ContainerSub>
            </ContainerHeader>

            <ContainerContent>
                <Card
                    title="Treino ao ar livre"
                    description="O treinamento ao ar livre é um grande aliado na sua preparação física!"
                    img={img01}
                />

                <Card
                    title="Treino ao ar livre"
                    description="O treinamento ao ar livre é um grande aliado na sua preparação física!"
                    img={img02}
                />

                <Card
                    title="Treino ao ar livre"
                    description="O treinamento ao ar livre é um grande aliado na sua preparação física!"
                    img={img03}
                />

            </ContainerContent>
        </Container>
    )
};

export default Exercises;