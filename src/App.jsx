

import React, { useEffect, useState } from 'react'
import Backgourd from './Build/Main/Backgourd';
import Navber from './Build/Navbar/Navber';
import Data from './Build/Data/Data';

const App = () => {
  const [Count,setCount]= useState(0);
  const [playstatus,setPlayStatus] = useState(false);
  let DataApp =[
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"Your passions"},
    {text1:"Give in to",text2:"Your passions"}
  ]
  
  const Time=()=>{
    setInterval(() => {
      setCount(Count ===2 ? 0 :Count+1);
      
     
      
    }, 10000);
  }
  Time();
  return (
    <>
      <Backgourd playstatus={playstatus} Count={Count}/>
      <Navber/>
      <Data
      setPlayStatus={setPlayStatus}
      DataApp={DataApp[Count]}
      Count={Count}
      setCount={setCount}
      playstatus={playstatus}/>
    </>
  )
}

export default App
