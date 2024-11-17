import React from 'react'
import './BG.css'
import assets from '../../assets/assets'
const Backgourd = ({playstatus,Count}) => {
if (playstatus) {
  return(
    <div className="Background fade-in">
         <video className='' autoPlay loop muted >
      <source src={assets.Video} type='video/mp4'/>
    </video>
    </div>
 
  )
}
else if(Count === 0){
  return <div className="image fade-in"><img src={assets.image1} alt="not found this image" /></div>}
else if(Count === 1){
  return <div className="image fade-in"><img src={assets.image2} alt="not found this image" />
</div>}
else if(Count === 2){
  return <div className="image fade-in"><img src={assets.image3} alt="not found this image" />
</div>}
else{

  console.log(Count);
  console.log(playstatus);
  
  
}
}

export default Backgourd
