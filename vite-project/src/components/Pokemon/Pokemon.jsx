import React from 'react'
import './Pokemon.css'
const Pokemon = ({name,image}) => {
  return (
    <div className='Pokemon'>
     <div className='name'> {name}</div>
      <img  className='image'src={image} alt=""/>
    </div>
  )
}

export default Pokemon
