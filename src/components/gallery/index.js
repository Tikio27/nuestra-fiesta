import './index.scss';
import React from 'react';
import ImageGallery from 'react-image-gallery';

function Gallery() {

  const images = [
    {
      original: '/assets/img/celebrant/gallery/1.jpg',
      thumbnail: '/assets/img/celebrant/gallery/1.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/2.jpg',
      thumbnail: '/assets/img/celebrant/gallery/2.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/3.jpg',
      thumbnail: '/assets/img/celebrant/gallery/3.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/4.jpg',
      thumbnail: '/assets/img/celebrant/gallery/4.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/5.jpg',
      thumbnail: '/assets/img/celebrant/gallery/5.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/6.jpg',
      thumbnail: '/assets/img/celebrant/gallery/6.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/7.jpg',
      thumbnail: '/assets/img/celebrant/gallery/7.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/8.jpg',
      thumbnail: '/assets/img/celebrant/gallery/8.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/9.jpg',
      thumbnail: '/assets/img/celebrant/gallery/9.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/10.jpg',
      thumbnail: '/assets/img/celebrant/gallery/10.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/11.jpg',
      thumbnail: '/assets/img/celebrant/gallery/11.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/12.jpg',
      thumbnail: '/assets/img/celebrant/gallery/12.jpg'
    },
    {
      original: '/assets/img/celebrant/gallery/13.jpg',
      thumbnail: '/assets/img/celebrant/gallery/13.jpg'
    }
  ];


  return (
    <div className='gallery-section'>
      <div className='gallery-container'>
        <ImageGallery items={images} lazyLoad />;
      </div>
    </div>
  )
}

export default Gallery;
