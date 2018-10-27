module.exports = {
	login: (req, res) => {
		req.app
			.get("db")
			.login({ ...req.body })
			.then(users => {
				if (users.length) {
					const user = users[0];
					req.session.user = user;
					res.json(user);
				}
			});
	},
	register: (req, res) => {
		req.app
			.get("db")
			.create_user({ ...req.body })
			.then(users => {
				if (users.length) {
					const user = users[0];
					req.session.user = user;
					res.json(user);
				}
			});
	},
	logout: (req, res) => {
		req.session.destroy();
	}
};
