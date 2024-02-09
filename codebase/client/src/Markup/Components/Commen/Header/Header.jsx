import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../../../../Context/AuthContext'

// Import the logo image
import logo from "../../../../assets/images/logo.png";

function Header(props) {
	const navigator = useNavigate();
	const { isLogged, setIsLogged, employee,isAdmin, fetchData } = useAuth();
	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigator("/login");
	// 	}
	// }, []);

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigator("/login");
	// 	}
	// 	// else{
	// 	//  console.log(isAdmin);
	// 	// }
	// }, [navigator]);

	// logout function
	const handleLogout = () => {
		localStorage.removeItem("employee");
		setIsLogged(false);
		fetchData();
		
	};

	return (
		<div>
			<header className="main-header header-style-one">
				<div className="header-top">
					<div className="auto-container">
						<div className="inner-container">
							<div className="left-column">
								<div className="text">Enjoy the Beso while we fix your car</div>
								<div className="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
							</div>
							<div className="right-column">
								<div className="phone-number">
								{ isLogged ? <> <span>Wellcome</span> {employee.employee_first_name}  </> : "Schedule Your Appontment Today :" } 
									<strong>1800 456 7890</strong>
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
									<div className="mobile-nav-toggler">
										<img src="../../../../assets/images/icons/icon-bar.png" alt="" />
									</div>
									<nav className="main-menu navbar-expand-md navbar-light">
										<div
											className="collapse navbar-collapse show clearfix"
											id="navbarSupportedContent"
										>
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
												<li>
													{ <Link to="/admin">Admin</Link>}
												</li>
												<li>
													{/* <h5>{!isAdmin? employee.employee_first_name: <Link to='/admin/dashbord'></Link>}</h5> */}
												</li>
											</ul>
											
										</div>
									</nav>
								</div>
								<div className="search-btn"></div>
								<div className="link-btn">
								{isLogged ? <Link className="theme-btn btn-style-two" onClick={handleLogout}> LOG OUT </Link>
								: 
								<Link to="/login" className="theme-btn btn-style-one">Login </Link>
								}		
											<span>  </span>
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
										<Link to="/">
											<img src="../../../../assets/images/custom/logo.png" alt="" />
										</Link>
									</div>
								</div>
								<div className="right-column">
									<div className="nav-outer">
										<div className="mobile-nav-toggler">
											<img src="../../../../assets/images/icons/icon-bar.png" alt="" />
										</div>

										<nav className="main-menu navbar-expand-md navbar-light"></nav>
									</div>
									<div className="search-btn"></div>
									<div className="link-btn">
										{/* {isLogged ? (
											<Link
												className="theme-btn btn-style-one"
												onClick={handleLogout}
											>
												Logout
											</Link>
										) : (
											<Link to="/login" className="theme-btn btn-style-one">
												Login
											</Link>
										)} */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mobile-menu">
					<div className="menu-backdrop"></div>
					<div className="close-btn">
						<span className="icon flaticon-remove"></span>
					</div>

					<nav className="menu-box">
						<div className="nav-logo">
							<Link to="index.html">
								<img src="../../../../assets/images/logo-two.png" alt="" title="" />
							</Link>
						</div>
						<div className="menu-outer"></div>
					</nav>
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
