Meteor.methods({
	addUserLocation: function(lon, lat) {
		if(! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		check(lon, Number);
		check(lat, Number);
		
		UserLocation.insert( 
		{
			user_id: Meteor.userId(),
			location: {
				type: "Point",
				coordinates: [lon, lat]
			}
		});
	},
	updateUserLocation: function(lon, lat) {
		if(! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		check(lon, Number);
		check(lat, Number);
		
		UserLocation.update( 
		{
			user_id: Meteor.userId()
		}, 
		{
			location: {
				type: "Point",
				coordinates: [lon, lat]
			}	
		});
	}
});