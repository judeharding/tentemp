import React from "react";

const Main = () => {
	console.log("logging from the main");
	const mainStyle = {
		padding: "20px 0",
		lineHeight: "1.5em",
	};

	return (
		<Main style={mainStyle}>
			<h1>This is the main</h1>
		</Main>
	);
};

export default Main;
