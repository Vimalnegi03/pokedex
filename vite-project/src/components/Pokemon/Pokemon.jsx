import React from 'react'

const Pokemon = ({name,image}) => {
  return (
    <div>
     <div> {name}</div>
      <img src={image} alt=""/>
    </div>
  )
}

export default Pokemon
