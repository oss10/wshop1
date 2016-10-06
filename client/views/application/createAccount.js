Template.createAccount.events({
  'submit': function(e) {
    console.log('GO !');
    e.preventDefault();
    var testVar = {
        user_pseudo: "mouloud",
        user_mail: "mouloud@free.fr",
        user_pass: "mouloud",
        user_adresse1: "18 rue des Moulouds",
        user_adresse2: "NONE",
        user_cp: "59780",
        user_ville: "LILLE",
        user_nom: "Mouloud",
        user_prenom: "Mouloud"
    };
    Meteor.call('insertUser', testVar, function(err, result) {
        console.log(result.msg);
    });
    console.log("END GO !");
  }
});