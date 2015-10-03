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
	}
});
