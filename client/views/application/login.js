Template.login.events({
  'submit': function(e) {
    e.preventDefault();
    Meteor.call('loginUser', e.target.inputEmail.value, e.target.inputPassword.value, function(err, result) {
        if(result.length === 1) {
            console.log("Connexion OK !");
            Session.set("user", result[0]);
            Router.go('home');
        }
        else
            console.log("Connexion KO...")
    });
  },
});