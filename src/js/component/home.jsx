
import React  from "react";
import Counter from "./secondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	return (
		<>
		<Counter num1={props.num1}  num2={props.num2}  num3={props.num3}  num4={props.num4}  num5={props.num5}/>
		</>
	);
};

export default Home;
