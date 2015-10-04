Meteor.methods({
	//Assumes row exists for user and that interest is a single string.
	addInterest: function(interest) {
		if(! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		check(interest, String);
		Interest.update( 
		{
			user_id: Meteor.userId()
		},
		{
			$push: {interests: interest}
		});
	},
	removeInterest: function(interest) {
		if(! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		check(interest, String);
		Interest.update( 
		{
			user_id: Meteor.userId()
		},
		{
			$pull: {interests: interest}
		});
	}
});