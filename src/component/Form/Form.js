import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			img: "",
			content: ""
		};
	}

	post = () => {
		const { title, img, content } = this.state;
		Axios.post("/api/posts", { title, img, content, author_id: this.props.id }).then(() => {
			this.props.location.history.push("/dashboard");
		});
	};

	render() {
		console.log(this.state.img);
		return (
			<div>
				<h1>New Post</h1>
				<input
					type="text"
					placeholder="Title"
					onChange={e => {
						this.setState({ title: e.target.value });
					}}
				/>
				<img src={this.state.img} alt="" />
				<input
					type="text"
					placeholder="Image URL"
					onChange={e => {
						this.setState({ img: e.target.value });
					}}
				/>
				<textarea
					type="text"
					placeholder="Desription"
					onChange={e => {
						this.setState({ content: e.target.value });
					}}
				/>
				<button className="post-button" onClick={this.post}>
					Post!
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { id: state.id };
}

export default connect(mapStateToProps)(Form);
