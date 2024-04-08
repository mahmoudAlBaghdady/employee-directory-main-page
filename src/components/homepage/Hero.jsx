import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="row align-items-center ps-md-5 py-5 mt-5 hero-div">
            <div className="col-lg-6 col-xl-5 col-12 text-lg-start text-center mt-md-5 mt-1">
                <p className="fs-1 fw-bold">Employee Directory Management Software for <span className="primary-text">Efficient</span> <span className="primary-text">Organization</span> & Contact Accessibility</p>
                <p className="fs-5 mt-2 text-secondary d-none d-lg-block">Our Employee Directory Management Software facilitates seamless management of employee contacts, enabling easy access to essential information and efficient organization. This platform assists in streamlining communication and enhancing operational efficiency within teams.</p>
                <button className="primary-button btn px-5 py-2 d-none d-lg-inline-block">Read More</button>
                <button className="secondary-button btn px-5 py-2 d-none d-lg-inline-block">Contact Us</button>
            </div>
            <div className="col-lg-6 col-xl-7 col-md-12">
                <img src="img/mainpic.png" alt="" className="img-fluid hero-image"/>
            </div>
            <div className="d-lg-none col-12 text-center">
                <p className="fs-5 mt-2 text-secondary d-lg-none">Our Employee Directory Management Software facilitates seamless management of employee contacts, enabling easy access to essential information and efficient organization. This platform assists in streamlining communication and enhancing operational efficiency within teams.</p>
                <button className="primary-button btn px-5 py-2 d-lg-none m-2">Read More</button>
                <button className="secondary-button btn px-5 py-2 d-lg-none m-2">Contact Us</button>
            </div>
        </div>
    </>
  )
}

export default Hero