import React from 'react'
import "../navbar/buttonStyle.css"
const ButtonStyle = ({Text}) => {
  return (
<div>
    <button className="btn1"><i className="animation"></i>{Text}<i className="animation"></i>
    </button>
</div>
  )
}

export default ButtonStyle
