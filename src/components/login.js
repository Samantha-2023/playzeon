import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import image3 from "../images/image3.jpg";
import logo from "../images/sport.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sport from "../images/sport.jpg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import LoginMain from "./loginmain";
import Loginpartner from "./loginpartner";
import Athlitik_Whitelogo from "../images/Athlitik_Whitelogo.svg"
import homebanner from "../images/homebanner.jpg"
import "./loginmain.css";


const Login = () => {
  const [showPartnerForm, setShowPartnerForm] = useState(false);


  	return (
		<div>
			<div className=" wrapper bg-cover w-full vh-100  " style={{ paddingBottom:"15px", backgroundImage: `url(${homebanner})` }}>
				<Row>
					<Col xs={4}>
				<img className="ml-20 mt-10 " src={Athlitik_Whitelogo} alt="logo" style={{ width: "300px" }} />
          </Col>
				</Row>
				<div className="flex flex-row">
					<div className="basis-3/4 mt-40 px-40 " style={{ color: "white" , fontWeight:'bold' }}>
						<div className="text-center" style={{ justifyContent: "center", alignItems: "center" }}>
							<h4>Book Sports Center</h4>
              <div> <hr className="divider dark my-4 text-center" style={{marginLeft:'auto', marginRight:'auto', width:"30%" , color:"white" ,size:"60px",borderWidth:"3px",border:'2px solid white' }}/> </div>
							<h4>Connect with other players </h4>
              <div> <hr className="divider dark my-4 text-center" style={{marginLeft:'auto', marginRight:'auto', width:"30%" , color:"white" ,size:"60px",borderWidth:"3px", border:'2px solid white'  ,fontWeight:'bold' }}/> </div>
							<h4>Signup for Lessons </h4>
						</div>
					</div>

					<div className="basis-3/4 mt-30 ">
						{!showPartnerForm
						?
						<LoginMain showPartnerForm={showPartnerForm} setShowPartnerForm ={setShowPartnerForm}/>
						:
						<Loginpartner showPartnerForm={showPartnerForm} setShowPartnerForm ={setShowPartnerForm}/>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
