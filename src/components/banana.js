import React from 'react'
import bananas from '../imgs/banana.jpg'

function banana() {
  return (
    <>
    <div>
        <img src={bananas} alt='banans' id='friut' />
    </div>

    <div>
        <h1>Did you know that:</h1>
        <ol>
            <li>Nearly all the bananas supplied to the United States are Cavendish bananas since they more resilient to the effects of traveling.</li>
            <li>Cooking bananas are usually starchy and need to be boiled, fried, or roasted to make them more palatable.</li>
            <li>Today’s bananas began to be developed around 650 A.D. in Africa.</li>
            <li>Americans eat an average of 27 pounds of bananas per person every year.</li>
            <li>Bananas are technically berries.</li>
        </ol>
    </div>
    </>
  )
}

export default banana