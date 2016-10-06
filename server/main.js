import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  var mysqlStringConnection = "mysql://root:oss10@127.0.0.1/canapp?debug=false&charset=utf8";
  var db = Mysql.connect(mysqlStringConnection); 
  Emissions = db.meteorCollection("emission", "emissionCollection");
  Users = db.meteorCollection("user", "userCollection");
  Meteor.publish('allUsers', function(){
    return Users.find();
   return Emissions.find();
  });
});