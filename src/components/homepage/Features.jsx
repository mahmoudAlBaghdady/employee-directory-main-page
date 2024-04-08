import React from 'react'

const Features = () => {
  return (
    <>
        <div className="row services-div pt-5 px-0 px-md-2 px-lg-1 justify-content-center">
            <div className="col-12 text-center mb-5">
                <p className="fs-1 fw-bold">Our <span className="primary-text text-capitalize">Features</span></p>
                <p className="fs-5 text-secondary">Enhance organizational efficiency with our comprehensive employee directory management features</p>
            </div>
            <div className="col-xl-3 col-md-5 col-11 text-center service-hover rounded-4 py-5 px-4 mx-auto mx-xl-3 my-3">
                <img src="img/services/01.png" className="service-icon"/>
                <p className="mt-3 mb-4 fs-4 fw-bold">Employee Profiles</p>
                <p className="m-1 fs-5">Easily access and manage detailed employee profiles, ensuring all essential information is up-to-date and readily available.</p>
            </div>
            <div className="col-xl-3 col-md-5 col-11 text-center service-hover rounded-4 py-5 px-4 mx-auto mx-xl-3 my-3">
                <img src="img/services/02.png" alt="" className="service-icon"/>
                <p className="mt-3 mb-4 fs-4 fw-bold">Contact Information</p>
                <p className="m-1 fs-5">Maintain accurate and accessible contact information for all employees to facilitate seamless communication.</p>
            </div>
            <div className="col-xl-3 col-md-5 col-11 text-center service-hover rounded-4 py-5 px-4 mx-auto mx-xl-3 my-3">
                <img src="img/services/03.png" alt="" className="service-icon"/>
                <p className="mt-3 mb-4 fs-4 fw-bold">Organizational Structure</p>
                <p className="m-1 fs-5">Visualize and navigate the organizational structure with ease, understanding team compositions and hierarchies.</p>
            </div>
            <div className="col-xl-3 col-md-5 col-11 text-center service-hover rounded-4 py-5 px-4 mx-auto mx-xl-3 my-3">
                <img src="img/services/04.png" alt="" className="service-icon"/>
                <p className="mt-3 mb-4 fs-4 fw-bold">Search & Filter</p>
                <p className="m-1 fs-5">Quickly find employees using advanced search and filter options, saving time and enhancing productivity.</p>
            </div>
            <div className="col-xl-3 col-md-5 col-11 text-center service-hover rounded-4 py-5 px-4 mx-auto mx-xl-3 my-3">
                <img src="img/services/05.png" alt="" className="service-icon"/>
                <p className="mt-3 mb-4 fs-4 fw-bold">Skill Tracking</p>
                <p className="m-1 fs-5">Track and manage employee skills and qualifications, making it easier to identify talent for projects and teams.</p>
            </div>
            <div className="col-xl-3 col-md-5 col-11 text-center service-hover rounded-4 py-5 px-4 mx-auto mx-xl-3 my-3">
                <img src="img/services/06.png" alt="" className="service-icon"/>
                <p className="mt-3 mb-4 fs-4 fw-bold">Access Control</p>
                <p className="m-1 fs-5">Implement role-based access control to ensure employees can only access the information relevant to their position.</p>
            </div>
        </div>
    </>
  )
}

export default Features