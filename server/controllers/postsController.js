module.exports = {
	getPosts: (req, res) => {
		req.app
			.get("db")
			.get_posts()
			.then(posts => {
				res.json(posts);
			})
			.catch(error => {
				console.log("Error getting posts", error);
				res.status(500).send("There was problem on the server.");
			});
	},
	createPost: (req, res) => {
		req.app
			.get("db")
			.create_post({ ...req.body })
			.then(post => {
				res.send();
			})
			.catch(error => {
				console.log("Error creating post", error);
				res.status(500).send("There was problem on the server.");
			});
	}
};
