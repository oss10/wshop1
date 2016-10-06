if(Meteor.isClient) {
	Emissions = new Mongo.Collection("emissionCollection");

	Emissions.allow({
		insert: function(emission) {
			return true;
		},

		remove: function(emissionId) {
			return true;
		},

		update: function(emissionId) {
			return true;
		}
	});
	console.log("Emission COLLECTION OK !");
}