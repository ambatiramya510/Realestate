import React from "react"

import "./featured.css"
import FeaturedCard from "./FeaturedCard"
import Headings from "./Headings"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Headings/>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured