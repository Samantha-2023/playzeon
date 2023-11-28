import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginMain from "./loginmain";
import Loginpartner from "./loginpartner";
import Athlitik_Whitelogo from "../images/Athlitik_Whitelogo.svg";
import "./playzeon.css";


const Login = () => {
	const [showPartnerForm, setShowPartnerForm] = useState(false);

	return (
		<>
			<div className=" wrapper backgrounddesign">
				<div className="row">
					<div className="col-md-3 col-sm-12 d-flex justify-content-center p-0">
						<img src={Athlitik_Whitelogo} className="w-75" />
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6 col-md-8 d-flex justify-content-center pt-20 htext">
						<div className="text-center">
							<h4 className="mt-3">Book Sports Center</h4>
							<h4 className="mt-5">Connect with other players </h4>
							<h4 className="mt-5">Signup for Lessons </h4>
						</div>
					</div>
					<div className="col-lg-6 col-md-8 d-flex justify-content-end   ps-0 htext">
						{!showPartnerForm ? (
							<LoginMain showPartnerForm={showPartnerForm} setShowPartnerForm={setShowPartnerForm} />
						) : (
							<Loginpartner showPartnerForm={showPartnerForm} setShowPartnerForm={setShowPartnerForm} />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
