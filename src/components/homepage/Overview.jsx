import React from 'react'

const Overview = () => {
  return (
    <>
        <div className="row align-items-center pt-5 mt-0 overview-div ps-md-5 vh-75">
            <div className="col-11 mx-auto text-center pt-5">
                <p className="fs-2 fw-bold text-white mt-5">Employee Directory Overview with<br/> Essential Information</p>
            </div>
            <div className="col-lg-6 col-xl-5 col-12 text-lg-start text-center text-white">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-5 col-12 mb-lg-3 my-md-3 mb-3">
                        <img src="img/services/01.png" alt="" className="overview-icon d-inline-block"/>
                        <p className="fs-5 fw-bold d-inline-block">Profile Accessibility</p>
                    </div>
                    <div className="col-lg-12 col-md-5 col-12 mb-lg-3 my-md-3 mb-3">
                        <img src="img/services/02.png" alt="" className="overview-icon d-inline-block"/>
                        <p className="fs-5 fw-bold d-inline-block">Contact Information</p>
                    </div>
                    <div className="col-lg-12 col-md-5 col-12 mb-lg-3 my-md-3 mb-3">
                        <img src="img/services/03.png" alt="" className="overview-icon d-inline-block"/>
                        <p className="fs-5 fw-bold d-inline-block">Organizational Chart</p>
                    </div>
                    <div className="col-lg-12 col-md-5 col-12 mb-lg-3 my-md-3 mb-3">
                        <img src="img/services/04.png" alt="" className="overview-icon d-inline-block"/>
                        <p className="fs-5 fw-bold d-inline-block">Skill Directory</p>
                    </div>
                    <div className="col-lg-12 col-md-5 col-12 mt-lg-3 my-md-3 mt-3">
                        <img src="img/services/05.png" alt="" className="overview-icon d-inline-block"/>
                        <p className="fs-5 fw-bold d-inline-block">Search & Filter Capabilities</p>
                    </div>
                    <div className="col-lg-12 col-md-5 col-12 my-3">
                        <a className="secondary-button btn px-5 py-2 d-none d-lg-inline-block" href='http://employee-directory-dashboard.s3-website.eu-central-1.amazonaws.com/' rel="noreferrer" target='_blank'>See More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-xl-7 col-md-12">
                <img src="img/mainpic.png" alt="" className="img-fluid hero-image"/>
            </div>
        </div>
    </>
  )
}

export default Overview