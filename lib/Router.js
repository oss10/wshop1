Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home'
});

Router.route('/login', {
	name: 'login'
});

Router.route('/create/account', {
	name: 'createAccount',
	data: function() {
		return {
			users: Users.find().fetch()
		}
	},
	waitOn: function(e) {
		return Meteor.subscribe('allUsers');
	}
});