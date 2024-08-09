import React from 'react'
import Headingss from './Headingss'
import RecentCard from './RecentCard'
import "./Recent.css"
const Recent = () => {
  return (
    <>
    <section className='recent padding'>
        <div className="container">
            <Headingss/>
            <RecentCard/>
        </div>
    </section>
    </>
  )
}

export default Recent