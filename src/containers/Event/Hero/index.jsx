import React from 'react';
import {Container, ContainerTitle, ContainerSub, CardImage, Content, Text, Start, Button} from './styles'

import img1 from '../../../assets/img/desafio_amizade.png'


export const Hero = ()=>{
    return(
      <>
        <Container>
            <Content>
                <ContainerTitle>
                    Inscreva-se já na
                </ContainerTitle>
                <ContainerSub>1º Desafio</ContainerSub>
                <ContainerSub>Balneário da Amizade</ContainerSub>
                <Text>
                    PP Running apresenta: o 1º Desafio Balneário da 
                    amizade. Serão 5Km para corrida e 3 Km para 
                    caminahda! Não fique de fora dessa! Inscreva-se já!
                </Text>
                <Start>
                  Com largada às 8H
                </Start>
                <Button>Inscreva-se já</Button>
            </Content>
            <CardImage>
              <img src={img1}/>
            </CardImage>
        </Container>
      </>
    )
};

export default Hero;