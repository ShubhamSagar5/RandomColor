

import React, { useState } from 'react'

const Main = () => {

    const [colorValue,setColorValue] = useState('#000000')

const handleClick = () => {
    console.log("called")
    const color = Math.floor(Math.random()*12345678).toString(16)
    const completeColor = '#'+color
    console.log(completeColor)
    setColorValue(completeColor)
}


    return (
    <div style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:colorValue
    
    }}>

        <button onClick={()=> handleClick()}>Random Color</button>
    </div>
  )
}

export default Main