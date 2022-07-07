import styled from "styled-components";
import { Colors } from "../../../styles/DesignSystem";

export const EventosContainer = styled.section`
    width: 100%;
    margin: 1.25rem 0;

    .image-gallery{
        display: flex;
        justify-content: center;
        &-content{
            width: 75%;
            display: flex;
            justify-content: center;
            overflow: hidden;
            margin-top: 2.5rem;

            @media screen and (max-width: 480px){
                flex-direction: column;
                align-items: center;
            }
        }


        &-slide-wrapper{
            .center{
                width: 100%;
                justify-self: center;
                align-self: center;
                img{
                    width: 100%;
                    border-radius: 175px 0px;
                }

                @media screen and (max-width: 480px){
                    width: 100%;
                }
            }
        }

        &-thumbnails-wrapper{
            width: 45%;
            margin-left: 2.5%;
            .image-gallery-thumbnails{
                height: 100%;

                &-container{
                    width: 100%;
                    height: 85%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 10px;
                    justify-self: center;

                    button{
                        width: 100%;
                        height: 100%;

                        span{
                            width: 100%;
                            height: 100%;
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 50px 0px;
                            }
                        }
                    }

                    

                    @media screen and (max-width: 480px){
                        width: 100%;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
`;

export const EventoTitle = styled.h2`
    margin: .75rem 0 ;
    text-align: center;
    color: ${Colors.secondary};

    span{
        color: ${Colors.primary};
    }
`;