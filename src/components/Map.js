import React from 'react'
import map from '../image/map-01.svg'
import speak from '../image/icon-speech-bubble.svg'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Map = () => {
  return (
    <>
      <section className="map">
        <div className="mid">
          <img className="map-logo" src={map} alt="" />
        </div>
        <ul className="info-bar">
          <li>
            <span>7</span>
            {'國家'}
            <FontAwesomeIcon className='circle' icon={faCircle}/>
          </li>
          <li>
            <span>278</span>
            {'學校'}
            <FontAwesomeIcon className='circle' icon={faCircle}/>
          </li>
          <li>
          <span>902</span>
            {'評論'}
            <FontAwesomeIcon className='circle' icon={faCircle}/>
          </li>
          <li className='review'>
            <img  src={speak}></img>
            <span >{'我要評論'}</span>
          </li>
        </ul>
        <div className='slogan'>
            <div className='title'>遊學。分享網</div>
            <p>評分你的學校</p>
            <p>選擇適合的遊學生活</p>
         </div>
      </section>
    </>
  )
}

export default Map
