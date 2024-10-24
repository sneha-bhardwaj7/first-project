// import React from 'react'
// import main1 from '../../assets/main1.png'
// import main2 from '../../assets/main2.png'
// import main3 from '../../assets/main3.png'
// import main4 from '../../assets/main4.png'


// const Main = () => {
//   return (
//     <div>
//       <div className='main'>
//         <div className='content'>
//           <h1>Minutes, Not hours.</h1>
//           <p>No need for lengthy processes like filming, editing, or storyboading, content can be <b>created in minutes </b>by simply providing a script</p>
//         </div>
//         <div className='img'>
//           <img src={main1} alt=''></img>
//         </div>
//       </div>

//       <div className='main'>
//       <div className='img'>
//           <img src={main2} alt=''></img>
//         </div>
//         <div className='content'>
//           <h1>80% cost reduction</h1>
//           <p>Eliminate the need for expensive equipment, location rentals, and professional videographer, reducing<b>overall production costs</b></p>
//         </div>
//       </div>

//       <div className='main'>
//         <div className='content'>
//           <h1>A Crew of 15 vs 1 AI tool</h1>
//           <p>Video producing coordination involves managing schedules and equipment. AI vedios streamline this,<b>reducing labor and managment efforts </b></p>
//           <a href='https://www.google.com'>Discover More</a>
//         </div>
//         <div className='img'>
//           <img src={main3} alt=''></img>
//         </div>
//       </div>
      
//       <div className='main'>
//       <div className='img'>
//           <img src={main4} alt=''></img>
//         </div>
//         <div className='content'>
//           <h1>140+ Languages</h1>
//           <p><b>Engage non-English speaking</b>audiences by automation dubbing and translation to create and distribute vedios quickly</p>
//           <a href='https://www.google.com'>Discover More</a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Main
import React from 'react'
import main1 from '../../assets/main1.png'
import main2 from '../../assets/main2.png'
import main3 from '../../assets/main3.png'
import main4 from '../../assets/main4.png'

const Main = () => {
  return (
    <div className='container'>
      <div className='main1 row'>
        <div className='content col-lg-6'>
          <h1><span className='color'>Minutes</span>, Not hours.</h1>
          <p>No need for lengthy processes like filming, editing, or storyboarding, content can be <b>created in minutes</b> by simply providing a script</p>
          <a href='#' className='discover-link'>Discover More</a>
        </div>
        <div className='img col-lg-6'>
          <img src={main1} alt='main visual' />
        </div>
      </div>
    

      <div className='main1 row'>
        <div className='img col-lg-6'>
          <img src={main2} alt='Main Visual' />
        </div>
        <div className='content col-lg-6'>
          <h1><span className='color'>80%</span> cost reduction</h1>
          <p>Eliminate the need for expensive equipment, location rentals, and professional videographer, reducing <b>overall production costs</b></p>
        </div>
      </div>

      <div className='main1 row'>
        <div className='content col-lg-6'>
          <h1>A Crew of <span className='color'>15 vs 1 AI tool</span></h1>
          <p>Video producing coordination involves managing schedules and equipment. AI videos streamline this, <b>reducing labor and management efforts</b></p>
          <a href='https://www.google.com'>Discover More</a>
        </div>
        <div className='img col-lg-6'>
          <img src={main3} alt='Main Visual' />
        </div>
      </div>

      <div className='main1 row'>
        <div className='img col-lg-6'>
          <img src={main4} alt='Main Visual' />
        </div>
        <div className='content col-lg-6'>
          <h1>140+ Languages</h1>
          <p><b>Engage non-English speaking</b> audiences by automating dubbing and translation to create and distribute videos quickly</p>
          <a href='https://www.google.com'>Discover More</a>
        </div>
      </div>
    </div>
  )
}
export default Main;
