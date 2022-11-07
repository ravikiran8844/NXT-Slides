import React from 'react'
import './index.css'

const SlideItem = props => {
  const {slide, handleActiveSlide} = props
  const {id, heading, description} = slide

  const handleClick = () => {
    handleActiveSlide(id)
    // console.log(id)
  }

  return (
    <li onClick={handleClick} className="slideItem">
      <h1 className="slideHeading">{heading}</h1>
      <p className="slideDescription">{description}</p>
    </li>
  )
}

export default SlideItem
