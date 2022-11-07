import React, {useState} from 'react'
import {v4} from 'uuid'

import SlideItem from '../SlideItem'
import './index.css'

const SlidesContainer = props => {
  const {initialSlidesList} = props

  const uniqueIDList = initialSlidesList.map(each => ({
    ...each,
    id: v4(),
  }))

  const [activeSlide, setActiveSlide] = useState(uniqueIDList[0])
  const [editHeading, setEditHeading] = useState(false)
  const [editDescription, setEditDescription] = useState(false)

  console.log(activeSlide)
  console.log(uniqueIDList)
  const handleActiveSlide = id => {
    console.log(id)
    const activeItem = uniqueIDList.filter(each => each.id === id)
    console.log(activeItem)
    setActiveSlide(activeItem[0])
  }

  const addNewItem = () => {
    console.log('add')
  }

  const changeHeadingText = e => {
    const changedText = e.target.value
  }

  return (
    <div>
      <button onClick={addNewItem} className="addButton">
        <img
          className="plus"
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
          alt="new plus icon"
        />
        New
      </button>
      <div className="cards">
        <div>
          <ol>
            {uniqueIDList.map(each => (
              <SlideItem
                handleActiveSlide={handleActiveSlide}
                key={each.id}
                slide={each}
              />
            ))}
          </ol>
        </div>
        <div className="activeCard">
          {editHeading ? (
            <input onChange={changeHeadingText} />
          ) : (
            <h1
              onClick={() => setEditHeading(!editHeading)}
              className="cardHeading"
            >
              {activeSlide.heading}
            </h1>
          )}
          <p
            onClick={() => setEditDescription(!editDescription)}
            className="cardText"
          >
            {activeSlide.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SlidesContainer
