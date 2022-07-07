import React from 'react';
import Cta from '../Cta';
import { CardBody, CardImage, CardTitle, CardContainer } from './styles';

const Card = ({ title, img, description }) => {
    return (
        <CardContainer>
            <CardImage>
                <img src={img} alt={title} />
            </CardImage>
            <CardTitle>{title}</CardTitle>
            <CardBody>
                <p>{description}</p>
                <Cta>
                    Saiba mais
                </Cta>
            </CardBody>
        </CardContainer>
    )
};

export default Card;