Meteor.methods({
	createHangout: function(hangoutTitle, hangoutDescription) {
		check(title, String);
		check(description, String);
		try {
			var documentId = Hangout.insert({
				title: hangoutTitle,
				description: hangoutDescription
			});
		} catch (exception) {
			return exception;
		}
	},
	leaveHangout: function(hangoutId) 
	{
		check(hangoutId, String);
		Hangout.update({_id: hangoutId}, {$pull: {users: Meteor.user()}});
	},
	changeLocation: function(hangoutId, lon, lat)
	{
		check(hangoutId, String);
		check(lat, Number);
		check(lon, Number);
		Hangout.update({_id: hangoutId}, 
			{location: {
					type: "Point",
					coordinates: [lon, lat]
		}});
	}
});
