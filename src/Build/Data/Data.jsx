import React from 'react'
import assets from '../../assets/assets'
import './Data.css'
const Data = ({  setPlayStatus,
    DataApp,
    Count,
    setCount,
    playstatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{DataApp.text1}</p>
        <p>{DataApp.text2}</p>
      </div>
      <div className="explore">
        <p>Explore the features</p>
        <img src={assets.arrowrightline} alt="not this image" />
      </div>
      <div className="dot-play">
        <ul className="dots">
            <li onClick={()=> setCount(0)} className={Count === 0?"dot orange":"dot"}>.</li>
            <li onClick={()=> setCount(1)}  className={Count === 1?"dot orange":"dot"}>.</li>
            <li onClick={()=> setCount(2)}  className={Count === 2?"dot orange":"dot"}>.  </li>
        </ul>
        <div className="hero-play">
          <img  onClick={()=>setPlayStatus(!playstatus)} src={playstatus?assets.pause:assets.start}alt="not found this image" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Data
