import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateState } from "../../ducks/reducer";

import "./auth.css";

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	login = () => {
		const { username, password } = this.state;
		username && password
			? axios
					.post("/api/auth/login", { ...this.state })
					.then(res => {
						const { id, username, profile_pic } = res.data;
						this.props.updateState(id, username, profile_pic);
						this.props.history.push("/dashboard");
					})
					.catch(error => {
						console.log("Error logging in ", error);
					})
			: alert("Please fill out all fields");
	};

	register = () => {
		const { username, password } = this.state;
		username && password
			? axios
					.post("/api/auth/register", { ...this.state, profilePic: `https://robohash.org/${username}` })
					.then(res => {
						const { id, username, profile_pic } = res.data;
						this.props.updateState(id, username, profile_pic);
						window.location.href = "http://localhost:3000/dashboard";
					})
					.catch(error => {
						console.log("Error registering ", error);
					})
			: alert("Please fill out all fields");
	};

	render() {
		return (
			<div className="auth">
				<div className="signin">
					<input
						autoFocus
						className="name"
						onChange={e => this.setState({ username: e.target.value })}
						onKeyPress={key => {
							key.key === "Enter" && this.login();
						}}
						type="text"
						placeholder="Name"
					/>
					<input
						className="password"
						onChange={e => this.setState({ password: e.target.value })}
						onKeyPress={key => {
							key.key === "Enter" && this.login();
						}}
						type="password"
						placeholder="Password"
					/>
					<button className="login" onClick={this.login}>
						Login
					</button>
					<button className="register" onClick={this.register}>
						Register
					</button>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	{ updateState }
)(Auth);
