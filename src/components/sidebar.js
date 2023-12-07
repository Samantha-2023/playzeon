import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillHome, AiFillDollarCircle } from "react-icons/ai";
import { RiListCheck3, RiRefund2Fill } from "react-icons/ri";
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaUserCog } from "react-icons/fa";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../components/playzeon.css";

const SideBar = () => {
	const navigate = useNavigate();

	const location = useLocation();

	const { pathname } = location;

	const isHomePage = pathname === "/dashboard";

	const [isAddCenterActive, setIsAddCenterActive] = useState(false);

	return (
		<div>
			<div className="row mt-3 ms-1 sidebarbackground">
				<div className="col  d-flex justify-content-between">
					<div className="sidebarlink">
						<p className="d-flex justify-content-start gap-1 " style={{ display: "inline-block", fontSize: "12px" }}>
							<AiFillHome style={{ width: "15px", height: "15px" }} />{" "}
							<span className="cursor-pointer" onClick={() => navigate("/dashboard")}>
								{" "}
								Home
							</span>
						</p>
					</div>
					<svg
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						stroke-width="0.9"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						style={{ width: "14px", height: "14px" }}
					>
						<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
				</div>
			</div>

			{isHomePage ? null : (
				<>
					{/* 2 */}

					<div className="row mt-1 ms-1">
						<div className="col  d-flex justify-content-between">
							<div className="sidebarlink">
								<Link to="/facilities" className="sidebarlink">
									<p className="d-flex justify-content-start gap-1 " style={{ display: "inline-block", fontSize: "12px" }}>
										<BiSolidHomeCircle style={{ width: "15px", height: "15px" }} />
										<span className="cursor-pointer" onClick={() => navigate("/facilities")}> Facilities</span>
									</p>
								</Link>
							</div>
							<svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="0.9"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "14px", height: "14px" }}
							>
								<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
					</div>
					{/* 3 */}
					<div className="row mt-1 ms-1">
						<div className="col  d-flex justify-content-between">
							<div className="sidebarlink">
								<p className="d-flex justify-content-start gap-1 " style={{ display: "inline-block", fontSize: "12px" }}>
									<AiFillDollarCircle style={{ width: "15px", height: "15px" }} />
									<span className="cursor-pointer">Pricing</span>
								</p>
							</div>
							<svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="0.9"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "14px", height: "14px" }}
							>
								<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
					</div>
					{/* 4 */}

					<div className="row mt-1 ms-1">
						<div className="col  d-flex justify-content-between">
							<div className="sidebarlink">
								<p className="d-flex justify-content-start gap-1 " style={{ display: "inline-block", fontSize: "12px" }}>
									<RiListCheck3 style={{ width: "15px", height: "15px" }} />
									<span className="cursor-pointer">Reservation</span>
								</p>
							</div>
							<svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="0.9"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "14px", height: "14px" }}
							>
								<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
					</div>

					{/* 5 */}

					<div className="row mt-1 ms-1">
						<div className="col  d-flex justify-content-between">
							<div className="sidebarlink">
								<p className="d-flex justify-content-start gap-1 " style={{ display: "inline-block", fontSize: "12px" }}>
									<RiRefund2Fill style={{ width: "15px", height: "15px" }} />
									<span className="cursor-pointer">Refunds</span>
								</p>
							</div>
							<svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="0.9"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "14px", height: "14px" }}
							>
								<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
					</div>

					{/* 6 */}

					<div className="row mt-1 ms-1">
						<div className="col  d-flex justify-content-between">
							<div className="sidebarlink">
								<p className="d-flex justify-content-start gap-1 " style={{ display: "inline-block", fontSize: "12px" }}>
									<FaUserCog style={{ width: "15px", height: "15px" }} />
									<span className="cursor-pointer">User Management</span>
								</p>
							</div>
							<svg
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="0.9"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "14px", height: "14px" }}
							>
								<path d="M8.25 4.5l7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</div>
					</div>
				</>
			)}
			{/* main div closing div  */}
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
