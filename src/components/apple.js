import React from 'react'
import apples from '../imgs/apple.jpg'

function apple() {
  return (
    <>
    <div>
        <img src={apples} alt='apple' id='friut'/>
    </div>

    <div>
        <h1>Did you know that:</h1>
        <ol>
            <li>Apples come in all shades of reds, greens, and yellows.</li>
            <li>Apples are grown in all 50 states in the USA.</li>
            <li>Some apple trees will grow over 40 feet high and live over 100 years.</li>
            <li>Apples are a member of the rose family.</li>
            <li>Apple trees take four to five years to produce their first fruit.</li>
        </ol>
    </div>
    </>
  )
}

export default apple