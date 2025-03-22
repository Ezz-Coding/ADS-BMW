import React, { useContext } from 'react'
import './BG.css'
import assets from '../../assets/assets'
import { CextentIds} from '../Data/Data'
const Backgourd = () => {
  const {playstatus ,count,setplaystatus,DataApp,setCount}= useContext(CextentIds)
  return(
    <>
{playstatus?


    <div className="Background fade-in">
         <video  autoPlay loop muted >
      <source src={assets.Video} type='video/mp4'/>
    </video>
    </div>
 
    
:
count === 0?
   <div className="image fade-in"><img src={assets.image1} alt="not found this image" /></div>
:count === 1?
   <div className="image fade-in"><img src={assets.image2} alt="not found this image" />
</div>:
count === 2?
   <div className="image fade-in"><img src={assets.image3} alt="not found this image" />
</div>:

 null
}
  <div className='hero'>
    {
  <div className="hero-text"style={{visibility:playstatus?"hidden":"visible"}}>
    <p>{DataApp[count].text1}</p>
    <p>{DataApp[count].text2}</p>
  </div>}
  <div className="explore">
    <p>Explore the features</p>
    <i class="ri-arrow-right-line"></i>
  </div>
  <div className="dot-play">
   { playstatus?<div className="emp"></div>:<ul className="dots">
        <li onClick={()=> setCount(0)} className={count === 0?"dot orange":"dot"}>.</li>
        <li onClick={()=> setCount(1)}  className={count === 1?"dot orange":"dot"}>.</li>
        <li onClick={()=> setCount(2)}  className={count === 2?"dot orange":"dot"}>.  </li>
    </ul>}
    <div className="hero-play">
      <img  onClick={()=>setplaystatus(!playstatus)} src={playstatus?assets.pause:assets.start}alt="not found this image" />
      <p>See the video</p>
    </div>
  </div>
</div>
</>
)

}
export default Backgourd
