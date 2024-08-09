import React from 'react'
import Back from '../common/Back'
import img from"../images/about.jpg"
import Hedd from './Hedd'
import "./about.css"
const About = () => {
  return (
    <>
    <section className='about'>
        <Back  title='About us - Who we are?' cover={img}/>

        <div className='container flex mtop'>
          <div className='left row'>
           <Hedd/>

            <p>Founded in 2004, [Your Real Estate Website Name] has come a long way from its beginnings in USA. When we first started out, our passion for real estate drove us to start our own business.</p>
            <p>We are a team of dedicated professionals with a passion for real estate. Our expertise and commitment to excellence allow us to offer a wide range of services tailored to meet your specific needs. Whether you're looking to buy your first home, sell your current property, or find the perfect rental, we're here to help.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
    </section>
    </>
  )
}

export default About