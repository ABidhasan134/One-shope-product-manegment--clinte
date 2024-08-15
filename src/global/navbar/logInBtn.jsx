import React from 'react'
import './logInBtn.css'
const LogInBtn = ({text}) => {
  return (
 <>
<button className="c-button c-button--gooey"> {text}
  <div className="c-button__blobs">
  <div></div>
  <div></div>
  <div></div>
  </div>
</button>
</>
  )
}

export default LogInBtn
