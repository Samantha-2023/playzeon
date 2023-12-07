import React, { useEffect, useState } from "react";
import "../components/playzeon.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import SideBar from "../components/sidebar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FacilityDisplayPageAction } from "../redux/action/actionFaciltyDisplayPage";
import { addFacilityDisplayPageReducer } from "../redux/reducer/reducerFacilityDisplayPage";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FacilityDisplayPage = () => {
	const navigate = useNavigate();

	// state variables for modal 1- edit
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedFacility, setSelectedFacility] = useState(null);

	// state variables for modal 2 -copy
	const [showCopyModal, setShowCopyModal] = useState(false);

	// state variables for modal 3 -copy
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const dispatch = useDispatch();
	const centerId = localStorage.getItem("centerIddd");

	const data = useSelector((state) => state.facilityDisplayPageData.addfaciltydisplayPage?.data);
	//get api data is here
	//facilityDisplayPageData is from the reducer== index.js//  addfaciltydisplayPage  is the initial values set in reducer//

	// reducer function name = addFacilityDisplayPageReducer

	// edit modal function
	const openEditModal = (facility) => {
		setSelectedFacility(facility);
		setShowEditModal(true);
	};

	// Function to close the edit modal
	const closeEditModal = () => {
		setSelectedFacility(null);
		setShowEditModal(false);
	};

	// copy modal function
	const openCopyModal = (facility) => {
		setSelectedFacility(facility);
		setShowCopyModal(true);
	};

	const closeCopyModal = () => {
		setSelectedFacility(null);
		setShowCopyModal(false);
	};

	// delete modal function

	const openDeleteModal = (facility) => {
		setSelectedFacility(facility);
		setShowDeleteModal(true);
	};

	const closeDeleteModal = () => {
		setSelectedFacility(null);
		setShowDeleteModal(false);
	};

	console.log(data, "daata  show the value here ");

	useEffect(() => {
		dispatch(FacilityDisplayPageAction(centerId));
	}, []);

	return (
		<div>
			<div className="row">
				<div className="col-lg-2">
					<SideBar />
				</div>
				<div className="col-lg-10 ">
					{/* <div key={facilityType}>
          <h3>Facility Type: </h3>
          
            <div key={facility.id}>
              <p>Name: {facility.name}</p>
            </div>
          ))}
        </div> */}

					<div className="container">
						<div className="vh-100" style={{ backgroundColor: "#EDEEF0", color: "black", fontSize: "13px", fontWeight: "400" }}>
							<p className="pt-2 mb-0 ms-2">Facilities </p>
							<hr className="mt-0 pt-0" />
							<div className="card border-0 rounded-3 mt-2 mb-3  ms-2 me-2 cardcolor-fdp" style={{ backgroundColor: "white" }}>
								{data &&
									Object.entries(data).map(([facilityType, facilities]) => (
										<div className="card-body">
											<div className="row  d-flex">
												<div className="col flex-grow-0 pe-1 text-nowrap ms-2 me-1">
													<h5 className="fw-bold">{facilityType}</h5>
												</div>
												<div className="col line flex-grow-1"></div>
												<div className="col flex-grow-0 px-1 cursor-pointer">
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
												</div>
												<div className="col flex-grow-0 p-0 me-1 cursor-pointer">
													<small className=" d-flex text-primary pointer" onClick={() => navigate("/facilities")}>
														Add
													</small>
												</div>

												<div className="row ps-4">
													<div className="text-muted col-xl-1 col-lg-1 col-md-2">
														<p className="mb-2 facilitydpage-p">S.no</p>
													</div>
													<div className="text-muted col-xl-3 col-lg-2 col-md-2">
														<p className="mb-2 facilitydpage-p">Name</p>
													</div>

													<div className="text-muted col-xl-6 col-lg-6 col-md-5 ps-0">
														<p className="mb-2 facilitydpage-p">Features</p>
													</div>

													<div className="text-muted col-xl-2 col-lg-3 col-md-3 ">
														<p className="mb-2  facilitydpage-p">Actions</p>
													</div>
												</div>

												{facilities.map((facility, index) => (
													<div
														key={index}
														className="row mx-0 py-2 px-2 mb-2 border border-black rounded-3 "
														style={{ background: "whitesmoke" }}
													>
														<div className="col-xl-1 col-lg-1  col-md-2 ps-4">
															<label>{index + 1}</label>
														</div>

														<div className="col-xl-3 col-lg-2 col-md-2 ps-2">
															<span className="text-secondary pointer">{facility.name}</span>
														</div>

														<div className="col-xl-6 col-lg-6 col-md-5 ps-1">{facility.features.join(",")}</div>

														<div className="col-xl-2 col-lg-3 col-md-2 ps-4">
															<span className="d-inline-block" onClick={() => openEditModal(facility)}>
																<FaRegEdit className="editicons-fdp" />
															</span>
															<label className="vl">&nbsp;|</label>&nbsp;
															<span className="d-inline-block">
																<AiFillDollarCircle className="editicons-fdp" />
															</span>
															<label className="vl">&nbsp;|</label>&nbsp;
															<span className="d-inline-block">
																<AiOutlineSchedule className="editicons-fdp" />
															</span>
															<label className="vl">&nbsp;|</label>&nbsp;
															<span className="d-inline-block" onClick={() => openCopyModal(facility)}>
																<FaRegCopy className="editicons-fdp" />
															</span>
															<label className="vl">&nbsp;|</label>&nbsp;
															<span className="d-inline-block" onClick={() => openDeleteModal(facility)}>
																<MdDelete className="editicons-fdp" />
															</span>
														</div>
													</div>
												))}
											</div>
										</div>
									))}
							</div>{" "}
							{/* this is card closing div */}
							{/* all 5 icon modal coding is down  */}
							{/* 1st edit modal opening up here  */}
							{/* Edit Facility Modal */}
							<Modal show={showEditModal} onHide={closeEditModal}>
								<Modal.Header closeButton>
									<Modal.Title className="fs-6">Court Detail </Modal.Title>
								</Modal.Header>
								<Modal.Body>
									{selectedFacility && (
										<div>
											<p>Name: {selectedFacility.name}</p>
											{/* ... (other fields) ... */}
										</div>
									)}
								</Modal.Body>
								<Modal.Footer>
									<Button className="btn btn-link" style={{ textDecoration: "none", color: "red" }} onClick={closeEditModal}>
										Cancel
									</Button>
									<Button variant="danger">Edit</Button>
									{/* Add a Save changes button or any other actions you need */}
								</Modal.Footer>
							</Modal>
							{/* copy modal  */}
							<Modal show={showCopyModal} onHide={closeCopyModal}>
								<Modal.Header closeButton>
									<Modal.Title className="fs-6">Copy </Modal.Title>
								</Modal.Header>
								<Modal.Body className="d-flex flex-column align-items-center">
									{selectedFacility && (
										<div className="d-flex flex-column align-items-center ">
											<FaRegCopy className=" editiconsmodal-fdp" />

											<p>
												Would you like to copy <strong>{selectedFacility.name} </strong>?
											</p>
										</div>
									)}
								</Modal.Body>
								<Modal.Footer className="d-flex justify-content-center">
									<Button className="btn btn-link" style={{ textDecoration: "none", color: "red" }} onClick={closeCopyModal}>
										Cancel
									</Button>
									<Button variant="danger">Copy</Button>
									{/* Add a Save changes button or any other actions you need */}
								</Modal.Footer>
							</Modal>
							{/* delete modal  */}
							<Modal show={showDeleteModal} onHide={closeDeleteModal}>
								<Modal.Header closeButton>
									<Modal.Title className="fs-6">Delete</Modal.Title>
								</Modal.Header>
								<Modal.Body className="d-flex flex-column align-items-center">
									{selectedFacility && (
										<div className="d-flex flex-column align-items-center">
											<MdDelete className=" editiconsmodal-fdp" />

											<p>
												Are you sure you want to delete <strong>{selectedFacility.name} </strong>?
											</p>
										</div>
									)}
								</Modal.Body>
								<Modal.Footer className="d-flex justify-content-center">
									<Button className="btn btn-link" style={{ textDecoration: "none", color: "red" }} onClick={closeDeleteModal}>
										Cancel
									</Button>
									<Button variant="danger">Delete</Button>
									{/* Add a Save changes button or any other actions you need */}
								</Modal.Footer>
							</Modal>
						</div>{" "}
						{/* this is col -10 complate background color closing div */}
					</div>
				</div>
				{/* {fragment  div and row div below  */}
			</div>
		</div>
	);
};

export default FacilityDisplayPage;
