import React, { useState, useEffect, useRef } from "react";
import addplus from "../images/addplus.svg";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import baseball from "../images/baseball.jpg";
import SideBar from "../components/sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SportsPhotosAction } from "../redux/action/actionSportsPhotos";
import "../components/playzeon.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import addimage from "../images/addimage.svg";

const Facilities = () => {
	// const navigate = useNavigate();
	const [chooseDays, setChooseDays] = useState([]);
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);

	const [showModal, setShowModal] = useState(false);
	const [showAddSportsModal, setShowAddSportsModal] = useState(false); // Adding another  state for the second modal to open
	const dispatch = useDispatch();

	const data = useSelector((state) => state.sportsPhotosGetData?.sportsphotos);
	//sportsPhotosGetData is from the reducer== index.js// sportsphotos is the initial values set in reducer//

	console.log(data.data, "data faciliyyyy");

	const handleAddFacility = () => {
		// Handle logic for adding a facility
		setShowModal(false); // Close the modal after adding
		setShowAddSportsModal(true); // Show the second modal
	};

	const handleDayChange = (day) => {
		if (chooseDays.includes(day)) {
			setChooseDays(chooseDays.filter((chooseDays) => chooseDays !== day));
		} else {
			setChooseDays([...chooseDays, day]);
		}
	};

	useEffect(() => {
		console.log("Data photos :", data);
		if (showModal) {
			dispatch(SportsPhotosAction()); // Dispatching  the action function name  to fetch sports photos from the api
		}
	}, [showModal, dispatch]);

	return (
		<div>
			<div className="row">
				<div className="col-lg-2">
					<SideBar />
				</div>
				<div className="col-lg-10 ">
					<Container Fluid className="flex-fill">
						<div className="vh-100" style={{ backgroundColor: "#EDEEF0", color: "black", fontSize: "13px", fontWeight: "400" }}>
							<p className="pt-2 mb-0 ms-2">Facilities </p>
							<hr className="mt-0 pt-0" />
							<div className="row">
								<div className="container">
									<div className="card border-0 rounded-4 mx-2 mb-2">
										<div className="card-body">
											<div className="row">
												<div className="col-xl-3 col-lg-4 col-md-6 my-2">
													<div
														className="text-center rounded-3 addlocation "
														onClick={() => setShowModal(true)}
														style={{ cursor: "pointer" }}
													>
														<div className="d-flex justify-content-center">
															<img
																src={addplus}
																alt="logo"
																className="  addplus"
																// onClick={() => navigate("")}
															/>
														</div>
														<div className="text-center  text-muted  f5">Add facilities</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<div style={{ backgroundColor: "#edeef0" }}>
					<Modal.Header closeButton>
						<Modal.Title style={{ fontSize: "13px" }}>Add </Modal.Title>
					</Modal.Header>
					<Modal.Body className="text-center">
						<div className="row ">
							{data?.data?.map((facility, index) => (
								<div className="col-3  d-flex justify-content-between gap-3 mb-2 ">
									<div
										key={facility.id}
										className="card  rounded pointer text-black border "
										style={{ borderColor: "GrayText", cursor: "pointer" }}
										onClick={handleAddFacility}
									>
										<div
											className="card-body"
											style={{ backgroundColor: "white" }}
											onClick={() => {
												setShowModal(false); // Close the first modal
												setShowAddSportsModal(true); // Open the second modal
											}}
										>
											<div className="d-flex flex-column align-items-center">
												{/* image style div is below */}
												<div
													style={{
														width: "40px",
														height: "40px",
														borderRadius: "50%",
														overflow: "hidden",
														marginBottom: "2px",
													}}
												>
													<img
														src={facility.url}
														alt={facility.title}
														style={{ width: "100%", height: "100%", objectFit: "cover" }}
													/>
												</div>
												<div className="text-center mt-0" style={{ fontSize: "10px", fontWeight: "bold", fontFamily: "sans-serif" }}>
													{facility.title}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</Modal.Body>
					<Modal.Footer></Modal.Footer>
				</div>
			</Modal>
			{/* add sports modal is below  */}

			<Modal className="modal-dialog modal-lg"  show={showAddSportsModal} onHide={() => setShowAddSportsModal(false)}>
				<div style={{ backgroundColor: "#edeef0" }}>
					<Modal.Header closeButton>
						<Modal.Title style={{ fontSize: "13px" }}> Add Tennis court </Modal.Title>
					</Modal.Header>
					<Modal.Body style={{ overflow:"auto"}} >
						<div className="bg-lightgrey">
							<form>
								<div className="row">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12  labelname fw-bold mb-0">Name</label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row">
									<div className="col-6">
										<input
											type="text"
											name="title"
											maxLength={50}
											className="form-control"
											id="input_addfacilityname"
											aria-describedby="name"
										/>
									</div>

									<div className="col-6">
										<input className="form-check-input " type="checkbox" value="checkbox" />
										&nbsp;
										<label className="form-check-label">Open to Athlitik users</label>
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12 labelname  fw-bold mb-0">Timings</label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row d-flex flex-column  ">
									<div className="col-sm-12  d-flex column-gap-3">
										{daysOfWeek.map((day) => (
											<div key={day} className="form-check form-check-inline mt-2 me-2">
												<input
													className="form-check-input"
													type="checkbox"
													id={`day-${day}`}
													value={day}
													checked={chooseDays.includes(day)}
													onChange={() => handleDayChange(day)}
												/>
												<label className="form-check-label" htmlFor={`day-${day}`}>
													{day}
												</label>
											</div>
										))}

										<div className="">
											<DatePicker
												className="form-control ps-1 cursor-pointer datepicker-size"
												popperPlacement="bottom"
												selected={startTime}
												onChange={(time) => setStartTime(time)}
												showTimeSelect
												showTimeSelectOnly
												timeFormat="h:mm aa"
												timeIntervals={30}
												timeCaption="Time"
												dateFormat="h:mm aa"
												placeholderText="Start time"
											/>
										</div>

										<div className="">
											<DatePicker
												className="form-control ps-1 cursor-pointer datepicker-size "
												popperPlacement="bottom"
												selected={endTime}
												onChange={(time) => setEndTime(time)}
												showTimeSelect
												showTimeSelectOnly
												timeFormat="h:mm aa"
												timeIntervals={30}
												timeCaption="Time"
												dateFormat="h:mm aa"
												placeholderText="End time"
											/>
										</div>
										<div className="d-flex align-items-center gap-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="13"
												height="13"
												fill="currentColor"
												class="bi bi-plus-circle-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
													style={{ backgroundColor: "#2d77d2", color: "#2d77d2" }}
												/>
											</svg>
											<small className=" d-flex text-primary" style={{ fontSize: "13px" }}>
												Add
											</small>
										</div>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12 labelname  fw-bold mb-0">Reservation attributes</label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row">
									<div className="col-sm-4 align-self-center">
										<label className="text-muted reservationlabelname">Players allowed</label>
									</div>
									<div className="col-sm-3 mb-1">
										<input
											placeholder="Min"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Max"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-2"></div>
								</div>

								<div className="row">
									<div className="col-sm-4 align-self-center">
										<label className="text-muted reservationlabelname">Duration allowed(hours)</label>
									</div>
									<div className="col-sm-3 mb-1">
										<input
											placeholder="Min"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Max"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-2"></div>
								</div>

								<div className="row">
									<div className="col-sm-4 align-self-center">
										<label className="text-muted reservationlabelname">Advance booking window(hours)</label>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Min"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-3">
										<input
											placeholder="Max"
											maxLength={30}
											name="reservationAttribute"
											type="number"
											className="form-control form-control"
										/>
									</div>
									<div className="col-sm-2"></div>
								</div>

								<div className="row mt-3">
									<div className="col-sm-12">
										<label className="text-muted-50 col-12 labelname  fw-bold mb-0">Court highlights </label>
										<hr className="pt-0  mt-2" />
									</div>
								</div>

								<div className="row">
									<div className="col-sm-12">
										<label className="text-muted"> Features</label>
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<input maxLength={50} type="text" className="form-control" />
									</div>
									<div className="col-sm-2" style={{ opacity: "0.5", cursor: "pointer" }}>
										<div className=" d-flex align-items-center gap-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="13"
												height="13"
												fill="currentColor"
												class="bi bi-plus-circle-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
													style={{ backgroundColor: "#2d77d2", color: "#2d77d2" }}
												/>
											</svg>
											<small className=" d-flex text-primary" style={{ fontSize: "13px" }}>
												Add
											</small>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-sm-12">
										<label className="text-muted">Images</label>
									</div>
								</div>
								<div className="row">
									<div className="w-100">
										<img src={addimage} className="addimage p-3 mt-2" alt="addimage" />
										<input type="file" accept="image/png, image/gif, image/jpeg" className="hide_file d-none" />
									</div>
								</div>
							</form>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<div className="justify-content end" style={{ fontSize: "80%" }}>
							<button className=" btn-sm float-right me-3  align-self-center  btn btn-danger " style={{ backgroundColor: "red", color: "white" }}>
								Save
							</button>
							<button
								type="submit"
								className=" btn-sm float-right bg-white border-0 me-3  align-self-center btn btn-danger "
								style={{ color: "red" }}
							>
								Cancel
							</button>
						</div>
					</Modal.Footer>
				</div>
			</Modal>
		</div>
	);
};

export default Facilities;
