import React from "react";
import "./Course.css";

const Course = (props) => {
	console.log(props.course);
	const { picture, course, fee } = props.course;
	return (
		<div className="course">
			<h2>
				<small>Learn </small>
				{course}
				<small> in 30 days</small>
			</h2>
			<img src={picture} alt="picture" />
			<p>course fee: ${fee}</p>
			<button className="btn">Enroll now</button>
		</div>
	);
};

export default Course;
