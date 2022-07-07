import React from 'react';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroText } from './styles';
import bgImg from "../../../assets/img/bg-img.jpg";
import textRunning from "../../../assets/img/txt-running.png";

const Hero = () => {
    return (
        <HeroContainer>

            <HeroBg>
                <ImgBg src={bgImg} alt='Fundo PP Running'/>
            </HeroBg>

            <HeroContent>
                <HeroText src={textRunning} alt='Text Logo PP Running' />
            </HeroContent>
        </HeroContainer>
    )
};

export default Hero;
