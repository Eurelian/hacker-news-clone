import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Articles() {
	return (
		<Container className="article_container">
            <Row>
                <Col sm>
                    <div className="articles">
                        <h3>articleAuthor</h3>
                        <h4>articleDate</h4>
                    </div>
                    <div className="articles">
                        <h1>articleTitle</h1>
                    </div>
                    <div className="articles">
                        <h4>articleUrl</h4>
                    </div>
                    <div className="articles">
                        <h4>articleTags</h4>
                    </div>
                </Col>
                <Col sm>
                    <div className="articles">
                        <h3>articleAuthor</h3>
                        <h4>articleDate</h4>
                    </div>
                    <div className="articles">
                        <h1>articleTitle</h1>
                    </div>
                    <div className="articles">
                        <h4>articleUrl</h4>
                    </div>
                    <div className="articles">
                        <h4>articleTags</h4>
                    </div>
                </Col>
                <Col sm>
                    <div className="articles">
                        <h3>articleAuthor</h3>
                        <h4>articleDate</h4>
                    </div>
                    <div className="articles">
                        <h1>articleTitle</h1>
                    </div>
                    <div className="articles">
                        <h4>articleUrl</h4>
                    </div>
                    <div className="articles">
                        <h4>articleTags</h4>
                    </div>
                </Col>
            </Row>
        </Container>
	);
}

export default Articles;