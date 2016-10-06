if(Meteor.isClient) {
Users = new Mongo.Collection("userCollection");

Users.allow({
    insert: function(person){
        /*if(newWallet.name == ""|| newWallet.name == null){
        if(Meteor.isClient)
        alert('Please, insert a correct wallet name');
        throw new Meteor.Error(403, 'Please, insert a correct wallet name');
        }*/

            return true;
        },

        remove: function(personId) {
            return true;
        },

        update: function(personId) {
            return true;
        }
    });
    console.log("COLLECTIONS OK !");
}