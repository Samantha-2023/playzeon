import React from 'react'
import SideBar from "../components/sidebar";
import { Container } from "react-bootstrap";

const Past = () => {



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
        {/*  actual past  code starts down */}

                                {/* <div className="col-auto">
									<Nav variant="pills" className="bg-white rounded-4 p-1">
										<Nav.Item>
											<Nav.Link
												eventKey="Process"
												className={`text-center px-2 py-1 ${activeTab === "Process" ? "active activecolor" : ""}`}
												onClick={() => handleTabClick("Process")}
											>
												Process
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link
												eventKey="Claim"
												className={`text-center px-2 py-1 ${activeTab === "Claim" ? "active" : ""}`}
												onClick={() => handleTabClick("Claim")}
											>
												Claim
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link
												eventKey="Past"
												className={`text-center px-2 py-1 ${activeTab === "Past" ? "active" : ""}`}
												// onClick={() => handleTabClick("Past")}
												onClick={() => navigate("/refunds_past")}
											>
												Past
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</div>

								<div className="col-auto text-end d-flex me-5  cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="22"
										fill="currentColor"
										className="bi bi-funnel-fill "
										viewBox="0 0 16 16"
										onClick={() => {
											openFilterModal();
											setShowAttributes(false);
										}}
									>
										<path
											fill="red"
											d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"
										/>
									</svg>
									&nbsp; &nbsp; &nbsp;
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="22"
											height="22"
											viewBox="0 0 16 16"
											className="dropdown-toggle"
											data-bs-toggle="dropdown"
											type="button"
											onClick={toggleAttributes}
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
								</div> */}




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
																Booking type
															</th>
                                                            <th className="pb-0 tablehead" scope="col">
																Status
															</th>
														</tr>
													</thead>
													<td colspan="8" className="text-center"></td>
													<tbody></tbody>
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
}

export default Past;

