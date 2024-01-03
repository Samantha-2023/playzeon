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
														navigate("/facilitiesdisplaypage");
													}}
													style={{ cursor: "pointer", backgroundColor: " rgba(0,0,0,.5)" }}
												>
													{console.log(center.id)}

													<img className="w-100 imgsize" 
													src={center?.photos[0]?.url}
													// src={working}
													 alt="logo" />
													{/*     "url" : "https://s3.amazonaws.com/playzeon-media-dev/303ebb60-7de0-4088-95bd-07052e722417/2023-11-20/cameron-foth-uDYWeZrMHsg-unsplash.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICHsITESfQjoZLwjYDXbi0ZLdp%2BtCwHlqrL0ytM7qdIFAiBvcm5PJ%2FhbMvByGovVol3ndJuJ2MTir7vr89wLWUB0QCq6BQgmEAEaDDUzNTMwMzE5Mjg1MCIMFWqVLI5YBWX3xp3UKpcFBEZ%2FrF4CDg0PvqT7Skcadr2guNKEuhO4Gais4%2BFSc4AUBeZJds%2F1f%2Bl4Oj9K8Yw%2F8s7cPkgt6HD0QC0U%2FOKVftOM6na11NUMsYdMUEyypN1rR3QawxWrQH%2BlUNOzKSmWu7PtR9Kn9cHObbWePUUJuNI1GhmOEex4kxQLVOZGtmg2UmjsQjhE6iqe7LWdkEzewSvc58JXO3gw5eb8mSZ8x4oe0zYubEK514aRCIZXG1kw3iP22cRuhFviiVJaRc%2BCawkKVPII13luuOusu5XAvE%2FyF1nBgf8sonzOeCMgjgFG27lTm1CMJfpsbjKEigwjaCPyiQe4v5PpQ0V8yeQjI%2BVzv9co0jZoc%2F9XTWaz%2BAIwdbEzBf2vbGMQf0RfqGeRlLCJKv6PEK9C7yxt3rO%2FOpOJ914dW1nYrPilAdivDjNZsmdnYGOUXtmsO65AtPrwPT3akla4qk2dRAtBVYf0Nt3KVbvo0HeVM08cMnhsVYU1ERKKhjrvxV%2FRSon5a2kbTDh28vwgwVm%2FpkY%2BICqgjTmmh8Kl6IsTyuq7OAi1YDpnDcDwgyqZP275AIV11afYiY%2FMiJwhP%2B1j5n8u4JwWm8FQqQOrbN8E9MGS9D9GcDuuvG%2FhdABlMUIwfMSAtKasb4qTyk3570jkeOVva%2B6ak13EvoZiF1SPohtwi1v2mCg0WnLyDt2DEcyomjm3BntgSNWlK4f2BMUjYPACZWC8Bbu%2FEtDI4HhzkMTVu3DUGccuUc4Nd8lpKzAtI%2BuSu0QH8oTPM%2Fvb8%2F83Fz46W51dYMdbFi9rjOLnHyYfSJmZCBHRh9igbYKNoiQq6eerkzkb1xjg57uu54Evb7r2yZPk4miELDne46JVk85YiT3plG4TLKZ7%2Fnc%2BMLC2lKwGOrIBgnbvbPVlDHRelFaoZqVZE0f9kH843DeNUc6EjbE%2FpP7eFNrx%2Fdip6nRUp96803j1NsM4zoYR5S2cQQWThhPUxfOPQ7RsiTVU5x6lTHMlmwH513cQXSt5Bz8CH0QFuFzqYinf49hvEaLqw0%2BxeRcP1O5JKNOZNlBFXTuZS7jRy6ZyIyYZVI7hzH1KdYPTZhBMGuthDMahVVUzomA28rqjujuVjW3EnDiaY%2F3%2FzdqWwPLiEg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231222T054405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=ASIAXZIUOQEJCRL2GKUR%2F20231222%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c8de4bc59eb51460482839d172de7c94acb9862379550ce3b82f278b8de403c1",
 */}
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
