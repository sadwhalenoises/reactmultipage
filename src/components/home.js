import React from 'react'
import friut from '../imgs/friuts.png'

function home() {
  return (
    <div>
        <div>
        <img src={friut} alt='friut' id='friut'/>
    </div>
    <div className="text">
        <h1>
            Welcome to the world of fruit!  Navigate to a different page to learn more about different types of fruit!
        </h1>
    </div>
    </div>
  )
}

export default home