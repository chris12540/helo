import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./nav.css";

const Nav = props => {
	console.log(props.pathname);
	return (
		props.pathname !== "/" && (
			<aside>
				<div className="profile">
					<img src={props.profilePic} alt="" />
					<h1>{props.username}</h1>
				</div>
				<nav>
					<Link to="/dashboard">Home</Link>
					<Link to="/new">New Post</Link>
					<Link to="/" className="logout">
						Logout
					</Link>
				</nav>
			</aside>
		)
	);
};

function mapStateToProps(state) {
	const { username, profilePic } = state;
	return { username, profilePic };
}

export default connect(mapStateToProps)(Nav);
