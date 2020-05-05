import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Articles from "./Articles"
import article from "./Article"


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
           		)}
        		)
      			}
			<Articles />
				</div>
			</div>	
		</>
	);
}

export default App;
