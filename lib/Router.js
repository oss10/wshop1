Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
	data: function() {
		return {
			emissions: Emissions.find()
		}
	},
	waitOn: function(e) {
		return Meteor.subscribe('allEmissions')
	}
});

Router.route('/emission/:id', {
	name: 'emission',
	data: function() {
		return {
			emId: this.params.id,
			emission: Emissions.findOne({emId: parseInt(this.params.id)})
		}
	},
	waitOn: function(e) {
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