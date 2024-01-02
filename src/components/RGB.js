import React, { useState } from 'react'

const RGB = () => {
  
    const [colorValue,setColorValue] = useState('#000000')
  
    const utiliy = () => {
        return Math.floor(Math.random()*256)
    }
    const handleClick = () => {
           const r = utiliy()
           const g = utiliy()
           const b = utiliy()

           setColorValue(`rgb(${r},${g},${b})`)
    }

    return (
    <div style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:colorValue
    
    }}>
        <button onClick={handleClick}>Click Generate RGB Color</button>
    </div>
  )
}

export default RGB