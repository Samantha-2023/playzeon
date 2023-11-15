import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./sidebar.css";
import { AiFillHome, AiFillDollarCircle } from "react-icons/ai";
import { RiListCheck3, RiRefund2Fill } from "react-icons/ri";
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { Outlet } from "react-router";



const SideBar = () => {

	const [isAddCenterActive, setIsAddCenterActive] = useState(false);

	return (
		<div>
			<Container fluid>
				<Row>
					<Col className="background vh-100" >
						<a href="/your-link-url" className="sidebarlink" style={{ textDecoration: "none" }}>
							<div className="d-flex justify-content-between  gap-2 pt-5 ">
								<AiFillHome className="mt-1" style={{ width: "15px", height: "15px" }} /> <span>Home</span>
								<svg
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									stroke-width="0.3"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									style={{ width: "16px", height: "16px" }}
								>
									<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
						</a>

						<a href="/your-link-url" className="sidebarlink" style={{ textDecoration: "none" }}>
							<div className="d-flex justify-content-between pt-2  ">
								<BiSolidHomeCircle className="mt-1" style={{ width: "15px", height: "15px" }} />
								<span> Facilities</span>
								<svg
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									stroke-width="0.3"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									style={{ width: "16px", height: "16px" }}
								>
									<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
						</a>

						<a href="/your-link-url" className="sidebarlink" style={{ textDecoration: "none" }}>
							<div className="d-flex justify-content-between  gap-2 pt-2 ">
								<AiFillDollarCircle className="mt-1" style={{ width: "15px", height: "15px" }} />
								<span>Pricing</span>
								<svg
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									stroke-width="0.3"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									style={{ width: "16px", height: "16px" }}
								>
									<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
						</a>

						<a href="/your-link-url" className="sidebarlink" style={{ textDecoration: "none" }}>
							<div className="d-flex justify-content-between  gap-2 pt-2 ">
								<RiListCheck3 className="mt-1" style={{ width: "15px", height: "15px" }} /> <span>Reservation</span>
								 <svg
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									stroke-width="0.3"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									style={{ width: "16px", height: "16px" }}
								>
									<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg> 
							</div>
						</a>

						<a href="/your-link-url" className="sidebarlink" style={{ textDecoration: "none" }}>
							<div className="d-flex justify-content-between  gap-2 pt-2 ">
								<RiRefund2Fill className="mt-1" style={{ width: "15px", height: "15px" }} />
								<span>Refunds</span>
								<svg
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									stroke-width="0.3"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									style={{ width: "16px", height: "16px" }}
								>
									<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
						</a>

						<a href="/your-link-url" className="sidebarlink" style={{ textDecoration: "none" }}>
							<div className="d-flex justify-content-between  gap-2 pt-2 ">
								<FaUserCog className="mt-1" style={{ width: "15px", height: "15px" }} /> <span>User Management</span>
								<svg
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									stroke-width="0.3"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									style={{ width: "16px", height: "16px" }}
								>
									<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
								</svg>
							</div>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SideBar;

{
	/* <div className ="sidebar pt-3 gap-1 d-lg-block d-md-none ">
<div className="d-flex justify-content-center ">
<label ><a href="#" style={{textDecoration:"none", color: 'black', }}> <AiFillHome  /> <span className='ml-2'>  Home </span> </a> 
</label > </div> */
}
