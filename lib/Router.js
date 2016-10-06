Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
	data: function() {
		return {
			users: Users.find().fetch()
		}
	},
	waintOn: function(e) {
		return Meteor.subscribe('allEmissions')
	}
});

Router.route('/login', {
	name: 'login',
	data: function() {
		return {
			users: Users.find().fetch()
		}
	},
	WaitOn: function(e) {
		return Meteor.subscribe('allUsers');
	}
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