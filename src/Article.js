import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function Article(props) {
    
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

export default Article;