import React from "react";
import "../App.css";

const NavBar = (props) => {
	return (
		<nav className='navbar navbar-dark navstyle App-header'>
			<span className='navbar-brand mb-0 h1'>Hacker News: THE CL0NE</span>

			<form className='form-inline my-2 my-lg-0' onSubmit={(e)=>props.onFormHandle(e)}>
				<input 
					className='form-control mr-sm-2'
					type='search'
					placeholder='Search'
					aria-label='Search'		
									/>
				<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
					Search
				</button>
			</form>
		</nav>
	);
};

export default NavBar;
