import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";

// Import the logo image
import logo from "../../../../assets/images/logo.png";
import iconBar from "../../../../assets/images/icons/icon-bar.png";

function Header(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [moblieNavMenu, setMoblieNavMenu] = useState(false);
  const navigator = useNavigate();
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // handle resize
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("employee");
    setIsLogged(false);
    fetchData();
  };

  // and handleIconBarClicl

  const handleIconBarClicl = () => {
    setMoblieNavMenu(!moblieNavMenu);
  };

  return (
    <div>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">
                  Monday - Saturday 8:00AM - 17:00PM
                </div>
              </div>
              <div className="right-column mr-2">
                <div className="phone-number">
                  {isLogged ? (
                    <>
                      {" "}
                      <span>Wellcome</span> {employee.employee_first_name}{" "}
                    </>
                  ) : (
                    "Schedule Your Appontment Today :"
                  )}
                  <strong>+251904825407</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleIconBarClicl}>
                    <img src={iconBar} alt="" />
                  </div>
                  <nav
                    className={
                      width > 1139
                        ? "main-menu navbar-expand-md navbar-light"
                        : "nav-outer mobile-nav-toggler"
                    }>
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent">
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/services">Services</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>{isLogged && <Link to="/admin">Admin</Link>}</li>
                        <li>
                          {isLogged ? (
                            <div>
                              {" "}
                              <Link
                                className="theme-btn btn-style-two"
                                onClick={handleLogout}>
                                {" "}
                                LOG OUT{" "}
                              </Link>
                            </div>
                          ) : (
                            <div className="">
                              <Link
                                to="/login"
                                className="theme-btn btn-style-one">
                                Login{" "}
                              </Link>
                            </div>
                          )}
                          <span> </span>
                        </li>
                      </ul>

                      <></>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo-box">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="right-column">
                  <div className="nav-outer">
                    <div className="mobile-nav-toggler">
                      <img src="assets/images/icons/icon-bar.png" alt="" />
                    </div>

                    <nav className="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div className="search-btn">
                    <button type="button" className="theme-btn search-toggler">
                      <span className="stroke-gap-icon icon-Search"></span>
                    </button>
                  </div>
                  <div className="link-btn">
                    <a href="#" className="theme-btn btn-style-one">
                      Book a Schedule{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
