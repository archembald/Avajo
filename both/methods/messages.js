Meteor.methods({
	addMessage: function(h_id, message) {
		if(! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		
		Message.insert( 
		{
			user_id: Meteor.userId(),
			hangout_id: h_id,
			content: message,
			time: new Date()
		});
	}
});
