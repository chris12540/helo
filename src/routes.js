import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./component/Auth/Auth";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Post from "./component/Post/Post";
import Nav from "./component/Nav/Nav";

export default (
	<Switch>
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/new" component={Form} />
		<Route path="/post/:postid" component={Post} />
		<Route path="/nav" componen={Nav} />
		<Route path="/" component={Auth} />
	</Switch>
);
