import "./App.css";
import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
	const element = <h1>Hello from Create React App</h1>;
	return (
		<>
			<div className="App">{element}</div>;
			<Header />
			<Navbar />
			<Main />
		</>
	);
}

export default App;
