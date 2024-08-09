import React from 'react'
import Headinn from './Headinn'
import PriceCard from './PriceCard'
import "./price.css"
const Price = () => {
  return (
    <>
    <section className='price padding'>
      <div className='container'>
        <Headinn/>
       <PriceCard/>
      </div>
    </section>
  </>
  )
}

export default Price