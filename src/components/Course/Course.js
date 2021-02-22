import React from "react";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCoffee,
	faShoppingCart,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Course = (props) => {
	// console.log(props);
	const { picture, course, fee, instructorName, id } = props.course;
	// console.log(id);
	return (
		<div className="course">
			<h2>
				<small>Learn </small>
				<Link to={"/course/" + id}>{course}</Link>
				<small> in 30 days</small>
			</h2>
			<img src={picture} alt="picture" />
			<p>course instructor: {instructorName}</p>
			<p>course fee: ${fee}</p>
			{props.showAddToCart && (
				<button
					onClick={() => props.handleAddCourse(props.course)}
					className="btn bg-primary"
				>
					<FontAwesomeIcon icon={faUserPlus} />
					Enroll now
				</button>
			)}
		</div>
	);
};

export default Course;
