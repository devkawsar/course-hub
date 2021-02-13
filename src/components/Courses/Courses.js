import React, { useState } from "react";
import fakeData from "../../fakeData/data.json";
import Course from "../Course/Course";

const Courses = () => {
	const [courses, setCourses] = useState(fakeData);
	// console.log(courses);
	return (
		<div>
			<h3>Explore our schools to find your perfect program</h3>
			<p>
				Match your goals to our programs, explore your options, and map out your
				path to success.
			</p>

			{courses.map((course) => (
				<Course course={course}></Course>
			))}
		</div>
	);
};

export default Courses;
