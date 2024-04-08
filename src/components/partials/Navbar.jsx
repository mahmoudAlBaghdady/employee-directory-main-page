import React from 'react'

const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
            <div className="container-fluid">
            <a className="navbar-brand ms-xl-5 ms-lg-4 mx-auto" href="/">
                <img src="/img/logo2.webp" alt="Logo" width="50" height="44" className="d-inline-block ms-xl-5 ms-lg-4 mx-auto mb-1"/>
                Employee Directory
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                <a className="navbar-brand mx-auto" href="/">
                    <img src="/img/logo2.webp" alt="Logo" width="50" height="44" className="d-inline-block"/>
                    Employee Directory
                </a>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body flex-grow-0 row">
                <div className="col-xxl-10 col-xl-9 col-lg-8 col-12 d-flex justify-content-lg-center justify-content-start">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#">Price</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-3 col-12 mx-auto my-auto">
                    <a className="primary-button btn px-3 py-2" href="/login">Dashboard</a>
                </div>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar