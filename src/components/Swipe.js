import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Swipe() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }
  return (
    <>
      <Carousel
        className='swiper'
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../image/index/19121814513814.jpg')}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../image/index/191212162233721.jpg')}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../image/index/banner_blue.jpg')}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../image/index/banner.jpg')}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../image/index/coverschoola.jpg')}
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Swipe
