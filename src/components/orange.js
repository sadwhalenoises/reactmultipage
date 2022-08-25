import React from 'react'
import oranges from '../imgs/orange.jpg'

function orange() {
  return (
    <>
    <div>
        <img src={oranges} alt='oranges' id="friut" />
    </div>

    <div>
        <h1>Did you know that:</h1>
        <ol>
            <li>Oranges are the largest citrus fruit in the world.</li>
            <li>Orange juice is the most popular fruit juice in America.</li>
            <li>Florida is the top orange producer in the United States.</li>
            <li>With a high resistance to disease, more oranges are killed by lightning than by plant diseases.</li>
            <li>Spain has over 35 million orange trees</li>
        </ol>
    </div>
    </>
  )
}

export default orange