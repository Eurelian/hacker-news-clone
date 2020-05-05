import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Articles from "./Articles";
import PageHandler from "./components/pagination";
import { paginate } from "./utils/paginate";
import Navbar from "./components/Navbar";

function App() {
	const [data, setData] = useState([]);
	const [pageSize, setPageSize] = useState(6);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const axios = require("axios").default;
		axios
			.get("http://hn.algolia.com/api/v1/search_by_date?query=react")
			.then((res) => setData(res.data.hits));
	}, []);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		console.log(page);
	};

	const items = paginate(data, pageSize, currentPage);

	return (
		<>
			<Navbar />
			<div className='article_grid'>
				{data !== "" &&
					items.map((data) => (
						<div className='articles'>
							<h4>{data.author}</h4>
							<p>{data.created_at.substring(0, 10)}</p>
							<h3>{data.story_title}</h3>
							<h5>{data.story_url}</h5>
							<p>{[...data._tags]}</p>
						</div>
					))}
			</div>
			<PageHandler
				style={{ position: "relative" }}
				itemsCount={data.length}
				pageSize={pageSize}
				onPageChange={handlePageChange}
				currentPage={currentPage}
			/>
		</>
	);
}

export default App;
