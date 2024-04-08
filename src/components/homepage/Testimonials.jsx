import React from 'react'

const Testimonials = () => {
  return (
    <>
        <div className="row justify-content-center my-5">
            <div className="col-11 mx-auto text-center">
                <p className="text-uppercase primary-text fw-bold">testimonial</p>
                <p className="text-capitalize fs-1 fw-bold">What Our <span className="primary-text text-capitalize">Clients Say</span></p>
            </div>
            <div className="col-xl-3 col-md-6 col-11 testimonial-card mx-auto text-center p-5 my-3">
                <img className="testimonial-image mx-auto mb-4" src="img/testomonial/pic1.jpeg"alt=""/>
                <p className="text-secondary lh-lg">Transitioning to a centralized employee directory has transformed our organizational efficiency. The intuitive interface and robust search capabilities of the directory management software have streamlined our internal processes, making information retrieval swift and precise. It's a game-changer for fostering connectivity within our teams.</p>
                <p className="fs-4 fw-bold mt-3">Jane Doe</p>
                <p className="fs-5 fw-bold mt-3 text-secondary">Human Resources Manager</p>
            </div>
            <div className="col-xl-3 col-md-6 col-11 testimonial-card mx-auto text-center p-5 my-3">
                <img className="testimonial-image mx-auto mb-4" src="img/testomonial/pic2.jpeg"alt=""/>
                <p className="text-secondary my-3 lh-lg">The efficiency and accuracy of our contact information have significantly improved since implementing this employee directory management solution. The ability to quickly update and access employee details has enhanced our operational workflows and communication. Highly recommended for any organization looking to optimize their employee data management.</p>
                <p className="fs-4 fw-bold mt-3">John Smith</p>
                <p className="fs-5 fw-bold my-3 text-secondary">CEO</p>
            </div>
            <div className="col-xl-3 col-md-6 col-11 testimonial-card mx-auto text-center p-5 my-3">
                <img className="testimonial-image mx-auto mb-4" src="img/testomonial/pic3.jpeg"alt=""/>
                <p className="text-secondary lh-lg">Adopting this directory management system has enabled us to maintain an up-to-date and accessible database of all our employees. It's not just a directory; it's a powerful tool for enhancing team collaboration and operational efficiency. The support team has also been incredibly responsive and helpful.</p>
                <p className="fs-4 fw-bold mt-3">Alex Johnson</p>
                <p className="fs-5 fw-bold mt-3 text-secondary">Operations Director</p>
            </div>
        </div>
    </>
  )
}

export default Testimonials