import React from "react";

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
		</div>
	);
};

export default Cart;
