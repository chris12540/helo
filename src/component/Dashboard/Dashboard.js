import React, { Component } from "react";
import Axios from "axios";
import "./dashboard.css";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			posts: [],
			myPosts: true
		};
	}

	search = () => {};

	reset = () => {
		this.setState({ seach: "" });
	};

	componentDidMount() {
		Axios.get("/api/posts").then(res => {
			console.log(res.data);
			this.setState({ posts: res.data });
		});
	}

	render() {
		const posts = this.state.posts.length ? (
			this.state.posts.map(post => {
				return (
					<a href={`/posts/${post.id}`} key={post.id} className="post">
						<h1>{post.title}</h1>
						<h3>{post.username}</h3>
						<img src={post.profile_pic} alt="" />
					</a>
				);
			})
		) : (
			<div>Loading...</div>
		);
		return (
			<div className="dashboard">
				<div className="search">
					<div className="searchBar">
						<input
							type="text"
							onChange={e => {
								this.setState({ search: e.target.value });
							}}
							onKeyPress={key => {
								key.key === "Enter" && this.search();
							}}
							value={this.state.search}
						/>
						{this.state.search && (
							<div className="search-reset" onClick={this.reset}>
								x
							</div>
						)}
					</div>
					<div className="myPosts">
						My Posts
						<input type="checkbox" checked />
					</div>
				</div>
				<div className="posts">{posts}</div>
			</div>
		);
	}
}

export default Dashboard;
