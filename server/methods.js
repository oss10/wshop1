Meteor.methods({
  insertUser: function(user) {
    console.log(user);
    Users.insert(user);
    return {msg: "YES"};
  },
  getAllUsers: function() {
      return Users.find()
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