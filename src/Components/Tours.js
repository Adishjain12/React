import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours"/>

      <div className="section-center featured-center">
        {tours.map(({id,src,date,title,text,location,days,price})=>{return  <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={src} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>{text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          </div>
        </article> })}
      </div>
    </section>

  )
}

export default Tours