import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
	const cart = props.cart;
	const totalPrice = cart
		.reduce((total, course) => total + course.fee, 0)
		.toFixed(2);

	return (
		<div className="cart">
			<h1>Purchase Summary</h1>
			<p>Course Purchased: {cart.length}</p>
			<p>Total cost: ${totalPrice}</p>
			<br />
			<Link to="/review">
				<button className="btn bg-primary">Review Order</button>
			</Link>
		</div>
	);
};

export default Cart;
