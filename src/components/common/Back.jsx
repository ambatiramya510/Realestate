
import React from "react"

const Back = ({  title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          
          <h1>{title}</h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back
