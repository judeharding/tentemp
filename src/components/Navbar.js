import React from "react";

const Navbar = () => {
	console.log("logging from the navbar");
	const navbarStyle = {
		padding: "20px 0",
		lineHeight: "1.5em",
	};

	return (
		<Navbar style={navbarStyle}>
			<h1> this is the navbar</h1>
		</Navbar>
	);
};

export default Navbar;
