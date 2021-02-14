import React, { useState } from "react";
import fakeData from "../../fakeData/data.json";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
	const [courses, setCourses] = useState(fakeData);
	const [cart, setCart] = useState([]);

	// console.log(courses);

	const handleAddCourse = (course) => {
		const newCourse = [...cart, course];
		setCart(newCourse);
		console.log("Course clicked", course);
	};
	return (
		<div className="courses">
			<div className="course-container">
				<h3>Explore our schools to find your perfect program</h3>
				<p>
					Match your goals to our programs, explore your options, and map out
					your path to success.
				</p>

				{courses.map((course) => (
					<Course course={course} handleAddCourse={handleAddCourse}></Course>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Courses;
