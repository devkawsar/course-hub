import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/data.json";
import Course from "../Course/Course";

const CourseDetail = () => {
	const { courseId } = useParams();
	const course = fakeData.find((pd) => pd.id === courseId);
	console.log(course);
	return (
		<div>
			<h1>Your Product Detail</h1>
			<Course showAddToCart={false} course={course}></Course>
		</div>
	);
};

export default CourseDetail;
