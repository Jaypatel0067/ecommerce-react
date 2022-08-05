import React from 'react'
import './slider.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    {
      url: 'https://cdn.thewirecutter.com/wp-content/media/2020/10/applewatch-2048px-8492.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://cdn.thewirecutter.com/wp-content/media/2021/11/applewatch-2048px-4518-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024',
      caption: 'Slide 2'
    },
    {
      url: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020.jpg.landing-big_2x.jpg',
      caption: 'Slide 3'
    },
  ];
function main_slider() {
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`}} className="image_item">
      
          </div>
        </div>
      ))} 
    </Slide>
  </div>
  )
}

export default main_slider