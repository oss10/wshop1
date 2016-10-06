Meteor.methods({
  insertUser: function(user) {
    console.log(user);
    Users.insert(user);
    return {msg: "YES"};
  },
  getAllUsers: function() {
      return Users.find()
  },
	loginUser: function(mail, pwd) {
       var match = Users.find({userMail: mail, userPass: pwd});
			 return match.fetch();
	 }
});

Meteor.methods({
	queryUser: function(user) {
		console.log(user);
		Users.findOne(user)
	}
});

Meteor.methods({
	queryDiffs: function(emission) {
		consol.log(emission);
		Emissions.findOne(emission);
		return {msg: "METHOD OK"};
	}
});