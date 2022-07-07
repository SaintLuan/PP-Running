import React from 'react';
import { EventosContainer, MainImage, Images, LightboxContainer, EventoTitle } from './styles';

// import img01 from '../../assets/img/logo_hor.png';
import ImageGallery from 'react-image-gallery';


const ExercisesGallery = () => {
    
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
      <EventosContainer>
        <EventoTitle>
          Confira alguns <span>exercícios</span> praticados pelo grupo
        </EventoTitle>
        <ImageGallery 
          items={images}
          showBullets= {false}
          infinite = {false}
          showNav = {false}
          showFullscreenButton = {false}
          showGalleryFullscreenButton = {false}
          showPlayButton = {false}
        />
      </EventosContainer>
    );
}

export default ExercisesGallery;
