import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import routes from "./routes";
import Nav from "./component/Nav/Nav";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav pathname={window.location.pathname} />
				{routes}
			</div>
		);
	}
}

export default App;
