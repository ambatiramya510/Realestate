import React from 'react'
import "./location.css"
import { location } from "../../data/Data"
import Headin from './Headin'
const Location = () => {
    return (
        <>
          <section className='location padding'>
            <div className='container'>
           <Headin/>
    
              <div className='content grid3 mtop'>
                {location.map((item, index) => (
                  <div className='box' key={index}>
                    <img src={item.cover} alt='' />
                    <div className='overlay'>
                      <h5>{item.name}</h5>
                      <p>
                        <label>{item.Villas}</label><br/>
                        <label>{item.Offices}</label><br/>
                        <label>{item.Apartments}</label>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )
    }
export default Location