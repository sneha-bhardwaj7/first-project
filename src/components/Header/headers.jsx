import React from 'react'
import './headers.css'
import image from '../../assets/headder.png'
const Content = () => {
  return (
    <div className='headers'>
      <div >
        <div className="top">
        <h1 className='heading'>Create <span className="gradient-text">Professional Videos</span></h1>
        <h1>in Minutes With AI Avatars</h1>
        </div>
      
      <p>transform your text into engaging video content instantly , while saving time and cutting costs</p>
      </div>
      <div>
        <input type='text' placeholder='Email'></input>
        <button>Get a Demo</button>
      </div>
      <div>
        <img src={image}></img>
      </div>
     

    </div>
  )
}

export default Content