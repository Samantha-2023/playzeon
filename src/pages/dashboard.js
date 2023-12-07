import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import addplus from "../images/addplus.svg";
import { useNavigate } from "react-router-dom";
import working from "../images/working.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AccountAction } from "../redux/action/actionAccount";
import { ListCenterAction } from "../redux/action/actionListCenter";
import "../components/playzeon.css";

const DashBoard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.accountdata?.account?.data);
	// account is the initial values set in reducer// accountdata is from the reducer== index.js

	console.log(data, "7777777777");

	const dataListCenter = useSelector((state) => state.listCenterData?.listCenter?.data);

	console.log(dataListCenter, "33333");

	useEffect(() => {
		dispatch(AccountAction());
	}, []);

	useEffect(() => {
		// dispatch(AccountAction())
		//AccountAction is the function from the action.js
		if (data && data.orgId) {
			dispatch(ListCenterAction(data.orgId));
		}
		// dispatch( ListCenterAction(data?.orgId))
		// dispatch(ListCenterAction(dataListCenter?.data?.orgId))
	}, [data]);

	console.log(data, "123456789");

	return (
		<Container className="flex-fill">
			<div className="vh-100 dashbackground">
				<p className="pt-2 mb-0 ms-2">Center </p>
				<hr className="mt-0 pt-0" />
				<div className="row">
					<div className="container">
						<div className="card border-0 rounded-4 mx-2 mb-2">
							<div className="card-body">
								<div className="row">
									<div className="col-xl-3 col-lg-4 col-md-6 my-2">
										<div className="text-center rounded-3 addlocation">
											<div className="d-flex justify-content-center">
												<img src={addplus} alt="logo" className="  addplus" onClick={() => navigate("/addcenter")} />
											</div>
											<div className="text-center  text-muted  f5">Add center</div>
										</div>
									</div>
									{/* check how to put the log inside the return function  h-100" */}

									{console.log(dataListCenter)}

									{dataListCenter?.map((center, index) => (
										<div className="col-xl-3  col-lg-4 col-md-6 py-lg-1 px-1g-2 px-xl-3 px-md-1  ">
											<div key={index} className="card custom-card h-100">
												{/* changes done here  */}
												<div
													className="card-img-top overflow-hidden"
													onClick={() => {
														localStorage.setItem("centerIddd", center?.id);
														navigate("/facilities");
													}}
													style={{ cursor: "pointer", backgroundColor: " rgba(0,0,0,.5)" }}
												>
													{console.log(center.id)}

													<img className="w-100 imgsize" src={working} alt="logo" />
													<div className="card-img-overlay mt-5 pt-4 text-white text-capitalize">
														<h6
															className="d-inline-block text-truncate"
															title={center?.title}
															style={{ maxWidth: "50px", color: "lightgray" }}
														>
															{center?.title}
														</h6>
													</div>
												</div>
												<div className="card-body location py-2 px-md-1 px-lg-1 dashboardcardbody">
													<div>
														<div
															className="small d-inline-block text-truncate dashboardcardaddress "
															title={`${center.streetAddress}, ${center.suite},${center.city}, ${center.stateprovince}`}
														>
															{center?.streetAddress}, {center?.suite},<br /> {center?.city}, {center?.stateprovince}
														</div>
														<div className="titlee mt-2"> Business hours</div>
														<div className="titlecards d-block">
															<span className="text-capitalize spandashboard">
																{center?.businessHours}
																{/* Sun -Sat: 7:00pm To 11.30pm  */}
																{/* <br /> */}
															</span>
															{/* mapping the center hours here */}
															{center?.centerHours?.map((hour, hourIndex) => (
																<span key={hourIndex} className="spandashboardtime">
																	{hour.weekday}: <br /> {hour.startTime} - {hour.endTime}
																	<br />
																</span>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*background div closing  */}
			</div>
		</Container>
	);
};
export default DashBoard;
