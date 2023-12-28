import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../components/sidebar";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../components/playzeon.css";
import { useSelector } from "react-redux";
import { RefundsFilterAction } from "../redux/action/actionRefund";

const Refunds = () => {
	// state variables for filter modal
	const [showFilterModal, setShowFilterModal] = useState(false);

	//  modal function
	const openFilterModal = () => {
		setShowFilterModal(true);
	};

	const closeFilterModal = () => {
		setShowFilterModal(false);
	};

	 const refundsfilterget = useSelector((state)=>state.refundsFilterGetData?.refundfilterget);
	//refundsFilterGetData is from the reducer== index.js// refundfilterget is the initial values set in reducer//

      console.log(refundsfilterget,"filterget_data")

	return (
		<div>
			<div className="row">
				<div className="col-lg-2">
					<SideBar />
				</div>
				<div className="col-lg-10 ">
					<Container Fluid className="flex-fill">
						<div className="vh-100" style={{ backgroundColor: "#EDEEF0", color: "black", fontSize: "13px", fontWeight: "400" }}>
							<p className="pt-2 mb-0 ms-2">Refunds </p>
							<hr className="mt-2 pt-0" />

							<div className="row d-flex justify-content-between mt-4 ms-2 ">
								<div className="col-auto">
									<ul className="nav nav-pills bg-white rounded-4 p-1">
										<div className="nav-link text-center px-2 py-1 active activecolor">Process</div>
										<div className="nav-link text-center px-2 py-1 ">Claim</div>
										<div className="nav-link text-center px-2 py-1 ">Past</div>
									</ul>
								</div>

								<div className="col-auto text-end d-flex me-5  cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										fill="currentColor"
										className="bi bi-funnel-fill "
										viewBox="0 0 16 16"
                                        onClick={() => openFilterModal()}

									>
										<path
											fill="red"
											d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"
										/>
									</svg>
									&nbsp; &nbsp; &nbsp;
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										viewBox="0 0 16 16"
										className="dropdown-toggle"
										data-bs-toggle="dropdown"
										type="button"
									>
										<path
											fill="red"
											d="M0 4.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.25m0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8.25m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75M13.5 10h2.25a.25.25 0 0 1 .177.427l-3 3a.25.25 0 0 1-.354 0l-3-3A.25.25 0 0 1 9.75 10H12V3.75a.75.75 0 0 1 1.5 0z"
										/>
									</svg>
									<ul class="dropdown-menu">
										<li>
											<a class="dropdown-item" href="#">
												Name
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Booked on
											</a>
										</li>
										<li>
											<a class="dropdown-item" href="#">
												Reservation Date
											</a>
										</li>
									</ul>
								</div>
							</div>
							{/* filter modal */}
							<Modal show={showFilterModal} onHide={closeFilterModal}  className="custom-modal">
								<Modal.Header closeButton>
									<Modal.Title className="" style={{fontSize:"12px", fontWeight:"normal"}}>Refunds Filter</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<div>
                                        <form>
										<div className="row fontadjustments">
											<div className="col-12" style={{ marginLeft: "-5px" }}>
												<label className="" style={{ fontSize: "12px",fontWeight:"400" }}>
													Reservation number
												</label>
                                              <input  placeholder=""  type="text" className="form-control form-control mt-1 mb-2 bg-white "/>
											  </div>	
											  </div>
											  <div className="row mb-2 ">
											  <label className="form-label" style={{ fontSize: "12px",fontWeight:"400" }}>
													Booking Date
												</label> 
												<div className= "col-6">
												<label className="form-label" style={{ fontSize: "12px",fontWeight:"400" }}>
													From
												</label>
												<input  placeholder="Default input"  type="date" className="form-control form-control mt-1 mb-2 bg-white "  name="bookedOnStartDate" id="input_undefined"  />
												</div>
												<div className= "col-6">
												<label className="form-label" style={{ fontSize: "12px",fontWeight:"400" }}>
												  To
												</label>
												<input  placeholder="Default input"  type="date" className="form-control form-control mt-1 mb-2 bg-white "  name="bookedOnStartDate" id="input_undefined"  />
												</div>
										
												 </div>

												 <div className="row mb-2 ">
											  <label className="form-label" style={{ fontSize: "12px",fontWeight:"400" }}>
													Reservation Date
												</label> 
												<div className= "col-6">
												<label className="form-label" style={{ fontSize: "12px",fontWeight:"400" }}>
													From
												</label>
												<input  placeholder="Default input"  type="date" className="form-control form-control mt-1 mb-2 bg-white "  name="bookedOnStartDate" id="input_undefined"  />
												</div>
												<div className= "col-6">
												<label className="form-label" style={{ fontSize: "12px",fontWeight:"400" }}>
												  To
												</label>
												<input  placeholder="Default input"  type="date" className="form-control form-control mt-1 mb-2 bg-white "  name="bookedOnStartDate" id="input_undefined"  />
												</div>
										
												 </div>


																						

                                            
                                            
                                            </form>	 </div>
								</Modal.Body>
								<Modal.Footer>
									<Button className="btn btn-link" style={{ textDecoration: "none", color: "red" }} onClick={closeFilterModal}>
										Clear
									</Button>
									<Button
										variant="danger"
										onClick={() => {
											setShowFilterModal(false);
											 dispatch(RefundsFilterAction());
										}}
									>
										Apply
									</Button>
								</Modal.Footer>
							</Modal>

							{/*  */}

							<div className="row">
								<div className="container">
									<div className="card border-0 rounded-4 mt-3 mx-3 me-3 pt-1 pb-3">
										<div className="card-body py-0">
											<div className="row" style={{ overflowX: "auto" }}>
												<table class="table table-borderless table-spacing">
													<thead>
														<tr className="tableheadrow bg-white">
															<th className="pb-0 tablehead" scope="col">
																Reservation number
															</th>
															<th className="pb-0  tablehead" scope="col">
																Name
															</th>
															<th className="pb-0  tablehead" scope="col">
																Booking Date
															</th>
															<th className="pb-0 tablehead" scope="col">
																Reservation Date
															</th>
															<th className="pb-0 tablehead" scope="col">
																Amount
															</th>
															<th className="pb-0 tablehead" scope="col">
																Reason
															</th>
														</tr>
													</thead>
													<td colspan="8" className="text-center"></td>
													<tbody>
														{/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
};

export default Refunds;
