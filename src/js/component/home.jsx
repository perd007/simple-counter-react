import { useState } from "react";
import React  from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	return (
		<>
		<div className="container bg-dark mt-5 d-flex  align-items-center justify-content-center">
				<div className=" row ">
					<div className="card col-2 fs-1  text-bg-dark p-3 fw-bolder d-flex  align-items-center justify-content-center ">
						<i class="far fa-clock"></i>
					</div>
					<div className="card col-2 fs-1  text-bg-dark p-3 fw-bolder">{props.num5}</div>
					<div className="card col-2 fs-1 text-bg-dark p-3 fw-bolder">{props.num4}</div>
					<div className="card col-2 fs-1 text-bg-dark p-3 fw-bolder">{props.num3}</div>
					<div className="card col-2 fs-1 text-bg-dark p-3 fw-bolder">{props.num2}</div>
					<div className="card col-2 fs-1 text-bg-dark p-3 fw-bolder">{props.num1}</div>
				</div>
		</div>
		</>
	);
};

export default Home;
