import React, { useContext } from 'react'
import { ColorContext } from '../context/Color.context'
// import { ColorContext } from '../context/Color.context'
import HeaderMenu from '../layouts/HeaderMenu'

function Home() {
   const {themeColor} = useContext(ColorContext)


  return (
    <div className="App" id={themeColor}>
        <HeaderMenu />
    </div>
  )
}

export default Home