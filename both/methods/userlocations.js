Meteor.methods({
	updateLocation: function(lat, lon) {
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
						coordinates: [lat, lon] 
					}
				}
			});
	}
});
