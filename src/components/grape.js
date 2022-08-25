import React from 'react'
import grapes from '../imgs/grape.jpg'

function grape() {
  return (
   <>
   <div>
        <img src={grapes} alt='grapes' id="friut" />
    </div>

    <div>
        <h1>Did you know that:</h1>
        <ol>
            <li>Grapes Are Actually Berries</li>
            <li> People Have Been Cultivating Grapes for 8,000 Years</li>
            <li>You Can Grow Grapes Almost Anywhere in the Country</li>
            <li>One Serving Provides 27% of Your Daily Vitamin C</li>
            <li>Around the world there are more than 8,000 varieties of grape. There are 7 different grape colors: red, green, white, black, purple, blue and golden.</li>
        </ol>
    </div>
   </>
  )
}

export default grape