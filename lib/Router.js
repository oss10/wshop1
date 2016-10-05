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
	name: 'createAccount'
});