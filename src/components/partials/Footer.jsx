import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="text-center text-lg-start bg-dark text-white">
            <section className=" pt-5">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4"><img src="/img/logo2.webp" alt="Logo" width="50" height="44" className="d-inline-block me-1 mb-1"/>Employee Direct</h6>
                            <p>If you have other concerns that we weren't able to address, please reach out to us at support@gmail.com or go to our support page.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                            <p><a href="#!" className="text-reset text-decoration-none">Product 1</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Product 2</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Product 3</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">Product 4</a></p>
                        </div>
                
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                            <p><a href="#!" className="text-reset text-decoration-none">link 1</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">link 2</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">link 3</a></p>
                            <p><a href="#!" className="text-reset text-decoration-none">link 4</a></p>
                        </div>
                
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-phone me-3"></i> + 961 78 87 16 49</p>
                            <p><i className="fas fa-print me-3"></i> + 961 03 78 76 66</p>
                        </div>
                    </div>
                    <div className="col-12 pt-5 pb-2 text-center">
                        <p>© 2024 Copyright</p>
                        <hr/>
                        <p className="fs-6">Welcome to Employee Directory website! Before you start browsing our site, please note that we use cookies to ensure the proper operation of our services, personalize content, deliver ads, provide social media features, boost performance and analyze our traffic. By continuing to browse our site, you consent to the collection, use, and storage of cookies on your device for us and our partners. You can revoke your consent at any time in your device browsing settings. Check our Privacy Policy (§6) to learn more about the cookies we use.</p>
                    </div>
                </div>
            </section>
        </footer>
    </>
  )
}

export default Footer