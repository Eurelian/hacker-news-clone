import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const axios = require("axios").default;
		axios
			.get("http://hn.algolia.com/api/v1/search_by_date?query=react")
			.then((res) => setData(res.data.hits));
	}, []);

	return (
		<div>
			{data !== "" &&
				data.map((data) => (
					<p key={Math.random()} className='App-header'>
						{data.story_title === null ? data.title : data.story_title}
					</p>
				))}

			{console.log(data)}
		</div>
	);
}

export default App;
