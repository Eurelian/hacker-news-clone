import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageHandler from "./components/pagination";
import { paginate } from "./utils/paginate";
import Navbar from "./components/Navbar";

function App() {
	const [data, setData] = useState([]);
	const [pageSize, setPageSize] = useState(6);
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState ("react");

	const handleForm = (e) =>  {
								setSearch(e.target.children[0].value);
								e.preventDefault()
							}
	

	useEffect((search) => {
		console.log(search)

		const axios = require("axios").default;
		axios
			.get(`http://hn.algolia.com/api/v1/search_by_date?query=${search}`)
			.then((res) => setData(res.data.hits))		
	},[]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		console.log(page);
	};

	const items = paginate(data, pageSize, currentPage);

	return (
		<>
			<Navbar onFormHandle={handleForm}/>
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
