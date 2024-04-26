import React from 'react'
import './BackGround.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/dark_matter_poster.jpg'
import image2 from '../../assets/dark_matter_poster2.jpg'
import image3 from '../../assets/dark-matter-poster3.jpg'



const BackGround= ({playSts,movieTextCount}) => {
  if(playSts){
    return(
        <video className='backGround fade-in' autoPlay loop muted>
            <source src={video1} type='video/mp4'/>
        </video>
    )
  }
  else if(movieTextCount===0){
    return(
        <img className='backGround' src={image1} alt='image loading'/>
    )
  }
  else if(movieTextCount===1){
    return(
        <img className='backGround' src={image2} alt='image loading'/>  
    )
  }
  else if(movieTextCount===2){
    return(
        <img className='backGround' src={image3} alt='image loading'/>
    )
  }
  else{
    return(
        <img className='backGround' src={image1} alt='image loading'/>
    )
  }
}

export default BackGround

