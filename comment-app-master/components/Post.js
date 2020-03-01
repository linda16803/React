import React, {useState} from 'react'

const Post = props => {
  if (!props.valid) {
    return null
  }
  console.log("props"+props.name)
  console.log("props"+props.post)
  return (
    <h2>hi {props.name}</h2>
  )
}

export default Post