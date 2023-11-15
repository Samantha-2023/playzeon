import React from "react";
import SideBar from "./components/sidebar";
import DashBoard from "./pages/dashboard";
import AddCenter from "./pages/addcenter";

const Combine = () => {
	return (
		<div>
			<div className="d-flex">
				<div className="col-lg-2">
					<SideBar />
				</div>
				<div className="col-lg-10">
					<DashBoard />
				</div>
			</div>
		</div>
	);
};

export default Combine;
