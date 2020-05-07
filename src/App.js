import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageHandler from "./components/pagination";
import { paginate } from "./utils/paginate";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);
	const [pageSize, setPageSize] = useState(6);
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("react");

	const handleForm = (e) => {
		e.preventDefault();
		const value = e.target.children[0].value;
		setSearch(value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios
				.get(`http://hn.algolia.com/api/v1/search_by_date?query=${search}`)
				.then((res) => res.data.hits);
			setData(result);
		};
		fetchData();
	}, [search]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		console.log(page);
	};

	const items = paginate(data, pageSize, currentPage);

	return (
		<>
			<Navbar onFormHandle={handleForm} />
			<div className='article_grid'>
				{data !== "" &&
					items.map((data) => (
						<div className='articles'>
							<h3>{data.story_title}</h3>
							<br />
							<h4>By: {data.author}</h4>
							<p>Date: {data.created_at.substring(0, 10)}</p>
							<a href={data.story_url}><h5>{data.story_url}</h5></a>
							<p>TAGS: {[...data._tags]}</p>
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
