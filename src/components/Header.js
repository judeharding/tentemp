import React from "react";

const Header = () => {
	console.log("logging from the header");
	const headerStyle = {
		padding: "20px 0",
		lineHeight: "1.5em",
	};

	return (
		<header style={headerStyle}>
			<h1>This is the header</h1>
		</header>
	);
};

export default Header;
