import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"; 
import "bootstrap/dist/css/bootstrap.min.css";
import image3 from "../images/image3.jpg";
import logo from "../images/sport.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sport from "../images/sport.jpg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Loginpartner from "./loginpartner";
import "./loginmain.css";
import { fetchLogin } from "../redux/action/action";
import { useDispatch } from "react-redux";



const LoginMain = ({setShowPartnerForm, ShowPartnerForm }) => {
	
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const initialValues = {
	email: '',
	password: '',
};


const validationSchema = Yup.object().shape({
	email: Yup.string()
		.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, 'Enter a valid email')
		.required('Enter a valid mail id'),
	password: Yup.string()
		// .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/, 'enter a valid password')
		.required('Enter a valid password'),

});
 		
	  const submitForm = async (values) => {
		try {
			dispatch(fetchLogin({email:values.email, password:values.password}));
			// const response = await axios.post("https://dev-api.playzeon.com/api/user-management/login", {
				//  email: values.email,
				// password: values.password,
			
		// }

			// const{ message, accesstoken } = response.data;
			// toast.success(message);
			// setAuthenticate(true);
			// localStorage.setItem("authToken", accesstoken);
			setTimeout(() => {
				navigate("/dashboard");
			}, 2000);
		} 
		catch (error) {
			console.error("Login failed. Please check your credentials.");
		}
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitForm,
	});
	console.log( formik.errors?.email);


	//   const handleSignIn = () => {
//     const requestData = {
//       userName: email,
//       password:password,
//       };
	

	return (
		<div>
			<div className="col-lg-9 ">
			<div className="flex flex-row">
				{/* <div className="basis-1/2 mt-40 " style={{color:'white'}}>
 </div>    */}
				<div className="basis-3/4 ">
					<Card className="p-3" style={{ backgroundColor: "#EDEEF0" }}>

						<Form  onSubmit={formik.handleSubmit}>
							
							<div className="mb-3 mt-3 ">
								<label for="exampleInputEmail1" className="form-label">
									Email address
								</label>
								<input 
								className="form-control"
								 id="exampleInputEmail1"
								 aria-describedby="emailHelp" 
                                //  onChange={(e) => {         
                                //  setEmail(e.target.value); 
                                //   }}
                                //  value={email}
								name="email"
								type="email"
								onChange={formik.handleChange}
								value={formik.values.email}
                                />
							</div>

							{ formik.touched.email && formik.errors?.email?.length && (
  <p className="error-text">{formik.errors?.email}</p>
)}





							<div className="mb-2">
								<label for="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input 
								className="form-control"
								 id="exampleInputPassword1"
							// 	 type="password" 
                            //     onChange={(e) => {         
                            //    setPassword(e.target.value); 
                            //    }}
                            //    value={password} 
							          name="password"
							           type="password"
										onChange={formik.handleChange}
										value={formik.values.password}							
							/>

							</div>
							{ formik.touched.password && formik.errors?.password && (
  <p className="error-text">{formik.errors?.password}</p>
)}

			<div className="d-grid float-right">
				<button className="btn btn-link mb-1" type="button" style={{ color: "red", textDecoration: "none" }}>
									Forgot Password?
								</button>
							</div>
							<div className="d-grid col-8 mx-auto mx-auto mb-3 ">

								{/* <button className="btn btn-danger" onClick={handleSignIn} size="lg" type="submit">
									Sign in	</button> */}


									<button className="btn btn-danger"  size="lg" type="submit">
									Sign in	</button>


							</div>



							<div className="grid grid-cols-2 gap-0">
								<div>
									<p className="text-xs mb-0" style={{fontSize:"10px"}}>Don't have an account?</p>
									<button className="btn btn-link" type="button" style={{ color: "red", textDecoration: "none", fontSize:"15px" }}>
										Sign up
									</button>
								</div>

								<div>
									<p className="text-xs mb-0" style={{fontSize:"10px"}}>Are you a sports organization?</p>
									<button className="btn btn-link mt-0" type="button" onClick={()=>setShowPartnerForm(true)} style={{ fontSize:"15px",  color: "red", textDecoration: "none" }} >
                  
                  Partner with us
									</button>
								</div>
							</div>
						</Form>
					</Card>
				</div>
			</div>
		</div>
		</div>
	);
};

export default LoginMain;



//   const handleChange =(event,value)=>{
//     setEmail(value);
//     setPassword(value);
//  }

//  const handleChange = (e) =>{
// 		 setEmail(e.target.value );
//      setPassword(e.target.value );
//  }