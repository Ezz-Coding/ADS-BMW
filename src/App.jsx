

import React, { useEffect, useState } from 'react'
import Backgourd from './Build/Main/Backgourd';
import Navber from './Build/Navbar/Navber';
import { Data } from './Build/Data/Data';


const App = () => {
 
  return (
    <>
    <Data>
      <Backgourd/>
      <Navber/>
   </Data>
    </>
  )
}

export default App
