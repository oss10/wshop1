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