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
	updateLocation: function(lon, lat) {
		check(lat, Number);
		check(lon, Number);
		if(! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		var usr = UserLocation.findOne( {user_ids: Meteor.userId() });
		if(! usr) {
			throw new Meteor.Error("not-authorized");
		}

		UserLocation.update( 
			{user_id: Meteor.userId() },
			{
				$set: {
					location: { 
						type: "Point",
						coordinates: [lon, lat] 
					}
				}
			});
	}
});
