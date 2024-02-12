import React, { useState } from "react";
import "../components/playzeon.css";
import SideBar from "../components/sidebar";
import ReservationFacility from "../pages/reservartionFacility";
// import ReservationCalendar from "../pages/reservationCalendar";
import ReservationForm from "../pages/reservationForm";
import Dnd from "./Dnd";
// import { useNavigate } from "react-router-dom";
// import { render } from "react-dom";
// import { Dnd } from "../pages/Dnd";

const Reservation = () => {
	// const navigate = useNavigate();
	const [dndfacilitylist, setDndFacilityList] = useState([]);
	const [dndallsports, setDndAllSports] = useState([]);

	return (
		<div>
			<div className="row">
				<div className="col-lg-2">
					<SideBar />
				</div>
				<div className="col-lg-10 ">
					<div className="content d-flex  flex-column bg-lightgrey px-2 mt-1">
						<div className="overflow-auto container-fluid">
							<div className="card tablecard mt-1">
								<div className="row py-3">
									<div className="col-sm-10 d-flex">
										<small className="mx-3 d-flex">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
												<path fill="orange" d="M4 20V4h16v16z" />
											</svg>
											Player/NotPaid
										</small>
										<small className="mx-3 d-flex">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
												<path fill="yellow" d="M4 20V4h16v16z" />
											</svg>
											Coach
										</small>

										<small className="mx-3 d-flex">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
												<path fill="purple" d="M4 20V4h16v16z" />
											</svg>
											Admin
										</small>

										<small className="mx-3 d-flex">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
												<path fill="grey" d="M4 20V4h16v16z" />
											</svg>
											Maintenance
										</small>

										<small className="mx-3 d-flex">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
												<path fill="blue" d="M4 20V4h16v16z" />
											</svg>
											Tournament
										</small>

										<small className="mx-3 d-flex">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
												<path fill="green" d="M4 20V4h16v16z" />
											</svg>
											Player/Paid
										</small>
									</div>

									<div className="col-sm-2 d-flex">
										<label className="col-ms-2 fw-bold" style={{ fontSize: "13px" }}>
											Booking Schedules
										</label>
									</div>
								</div>
								{/* 1 st row above ended */}

								<hr className="line" />

								<ReservationFacility setDndFacilityList={setDndFacilityList} dndfacilitylist={dndfacilitylist} dndallsports={dndallsports} setDndAllSports={setDndAllSports}/>

								<hr className="line2" />

								{/* <ReservationCalendar /> */}
								<Dnd
									setDndFacilityList={setDndFacilityList}
									dndfacilitylist={dndfacilitylist}
									setDndAllSports={setDndAllSports}
									dndallsports={dndallsports}
								/>

								<hr className="line2" />
								<br />
								<br />
								<br />

								<ReservationForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
