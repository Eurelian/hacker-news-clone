import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';




function Articles(props) {
    let articledate = props.date
    if (articledate !== undefined) {articledate = articledate.substring(0,10)}
    else {}

	return (

        <>
        <div className="articles">
            <h4>{props.author}</h4>
            <p>{articledate}</p>
            <h3>{props.title}</h3>
            <h5>{props.url}</h5>
            <p>{props.tags}</p>
        </div>
        
        </>
    	);
}

export default Articles;