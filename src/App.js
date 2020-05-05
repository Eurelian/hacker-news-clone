import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Articles from "./Articles";
import PageHandler from "./components/pagination";
import { paginate } from "./utils/paginate";

function App() {
	const [data, setData] = useState([]);
	const [pageSize, setPageSize] = useState(5);
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
			<div className='App'>
				{data != "" && <header className='App-header'>{data[0].title}</header>}
				{console.log(data)}
			</div>
			<div className="grid_container">
				<div className="article_grid">
				{ [...data].map( article => {
          return (
            <Articles 
				title={article.story_title} 
				key={article.story_id} 
					url={article.url} 
					author={article.author} 
					date={article.created_at}
					tags={article.comment_text}
					/>
            )
          }
        )
      }
					<Articles />
				</div>
			</div>	

			<div>
				{data !== "" &&
					items.map((data) => (
						<p key={Math.random()} className='App-header'>
							{data.story_title === null ? data.title : data.story_title}
						</p>
					))}
				<PageHandler
					itemsCount={data.length}
					pageSize={pageSize}
					onPageChange={handlePageChange}
					currentPage={currentPage}
				/>

				{console.log(data)}
			</div>
			<Articles />
		</>
	);
}

export default App;
