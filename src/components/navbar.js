import React, { useState } from "react";
import NavLink from "react-bootstrap/NavLink";
import NavItem from "react-bootstrap/NavItem";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Athlitik_Whitelogo from "../images/Athlitik_Whitelogo.svg";
import { BsPersonCircle } from "react-icons/bs";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/playzeon.css";


const NavBar = () => {
	const [isLogOut, setIsLogOut] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		setIsLogOut(true);
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		navigate("/");
	};
	return (
		<div>
			<Navbar className="px-3 py-3" bg="dark" variant="dark">
				<Nav className="container-fluid">
					<Nav.Item>
						<img className="" src={Athlitik_Whitelogo} alt="logo" style={{ width: "175px" }} />
					</Nav.Item>

					<Nav.Item>
						<Navbar.Brand>
							ABC Sports Organization <label className="vl-opacity-25"> | </label>
						</Navbar.Brand>
					</Nav.Item>

					<Dropdown>
						<Dropdown.Toggle className="bg-location text-white rounded-3 dropdown-toggle btn btn-primary">
							Concert center
							<span className="px-1 small fw-light text-danger pointer"> &nbsp;Edit&nbsp;</span>
							<label className="vl-opacity-25"> | </label>
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Cosmic Academy</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Concert Sports</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Fitness Freak</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Physical Fitness</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown className="ml-auto">
						<Dropdown.Toggle className="dropdowncolor d-flex align-items-center" id="dropdown-basic ">
							<BsPersonCircle className="mr-2" /> Samantha
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item   as={Link} to="/organization" >Organization info</Dropdown.Item>
							
							<Dropdown.Divider />
							<Dropdown.Item onClick={handleLogout} href="#/action-2">
								Logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Navbar>
			<Outlet />
		</div>
	);
};

export default NavBar;

// #212529    <Nav.Item>
{
	/* <Nav.Link as={Link} to="/user-list">User List</Nav.Link> */
}
// </Nav.Item>

//     <Nav.Item>
//     <Nav.Link
//   //    onClick={handleClickUserLogOut}
//   >Log Out</Nav.Link>
//   </Nav.Item>

{
	/* <Button className="bg-location text-white rounded-3 dropdown-toggle btn btn-primary" type="button" aria-expanded="false">
						Concert center
						<span className="px-1 small fw-light text-danger  pointer "> &nbsp;Edit&nbsp;</span>
						<label className="vl-opacity-25"> | </label>
                  
					</Button> */
}
