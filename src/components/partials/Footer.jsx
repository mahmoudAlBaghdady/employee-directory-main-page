import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="text-center text-lg-start bg-dark text-white">
            <section className=" pt-5">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4"><img src="/img/logo2.webp" alt="Logo" width="50" height="44" className="d-inline-block me-1 mb-1"/>Employee Directory</h6>
                            <p>For assistance or inquiries about our directory management platform, please contact us at support@employeedirect.com or visit our support page.</p>
                        </div>

                        <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Features</h6>
                            <p><a href="#!" className="text-reset text-decoration-none">Employee Profiles</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Search & Filter</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Organizational Charts</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Contact Management</a></p>
                        </div>
                
                        <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                            <p><a href="#!" className="text-reset text-decoration-none">FAQ</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Support Center</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Contact Us</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Privacy Policy</a></p>
                        </div>
                
                        <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                            <p>+ 961 78 87 16 49</p>
                            <p>support@employeedirectory.site</p>
                            <p>www.employeedirectory.site</p>
                            <p>dashboard.employeedirectory.site</p>
                        </div>
                    </div>
                    <div className="col-12 pt-5 pb-2 text-center">
                        <p>© 2024 Copyright Employee Directory</p>
                        <hr/>
                        <p className="fs-6">Welcome to Employee Directory! We use cookies for site functionality, analytics, and to improve your experience. By continuing, you consent to our cookie policy. You can manage cookie settings anytime. For more details, check our Privacy Policy.</p>
                    </div>
                </div>
            </section>
        </footer>

    </>
  )
}

export default Footer