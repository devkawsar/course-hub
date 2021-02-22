import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";

const Review = () => {
	const { cart, setCart } = useState([]);
	useEffect(() => {
		// cart
		const savedCart = getDatabaseCart();
		const courseIds = savedCart.id;
		console.log(courseIds);
	}, []);
	return (
		<div>
			<h1>This is the review</h1>
		</div>
	);
};

export default Review;
