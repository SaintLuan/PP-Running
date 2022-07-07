import styled from "styled-components";

export const HeroContainer = styled.section`
    background: #ffffff;
    display: flex;
    justify-content: center;
    margin-top: -130px;
`

export const HeroBg = styled.article `
    width: 100%;
    overflow: hidden;
    @media screen and (max-width: 480px){
        height: 500px;
    }
`
export const ImgBg = styled.img`
    -o-object-fit: cover;
    object-fit: cover;
    background: #E4F1FA;

`
export const HeroContent = styled.section`
  
`

export const HeroText = styled.img`
    position: absolute;
    width: 425px;
    height: 150px;
    left: 308px;
    top: 196px;

    @media screen and (max-width: 480px){
        width: 250px;
        height: 125px;
        left: 25px;
    }
`