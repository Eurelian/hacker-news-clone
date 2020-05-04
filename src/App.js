import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Articles from "./Articles"


function App() {

	const [data, setData] = useState([]);

	useEffect(() => {
		const axios = require("axios").default;
		axios
			.get("http://hn.algolia.com/api/v1/search_by_date?query=react")
			.then((res) => setData(res.data.hits));
	}, []);

	return (
		<>
		<div className='App'>
			{data != "" && <header className='App-header'>{data[0].title}</header>}
			{console.log(data)}
		</div>
		<Articles />
		</>
	);
}

export default App;
