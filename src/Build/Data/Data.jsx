import React, { createContext, useEffect, useState } from 'react'

import './Data.css'
const CextentIds = createContext();

const Data  =(props)=>{
  const [count ,setCount] = useState(0);
  const [playstatus ,setplaystatus] = useState(false);

    const DataApp =[
      {text1:"Dive into",text2:"What you love"},
      {text1:"Indulge",text2:"Your passions"},
      {text1:"Give in to",text2:"Your passions"}
    ]
    const Time=(prevCount)=>{
      if (prevCount === 2) {
        return 0;
      } else {
        return prevCount + 1;
        
      }
    }
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => (
       Time(prevCount)
        ));
        
      }, 6000);
    
      return () => clearInterval(interval); 
    }, []);

    
    const value = {
      count,
      setCount,
      playstatus,
      setplaystatus,
      DataApp
        }  
  return (
   <CextentIds.Provider value={value}>
 {props.children}
   </CextentIds.Provider>
  )

}
export  {Data,CextentIds}
