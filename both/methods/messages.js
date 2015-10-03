Meteor.methods({
	addMessage: function(chat_id, text) {
		if(! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}

		var message = Message.findOne( {user_ids: Meteor.userId() });
		if(! message) {
			throw new Meteor.Error("not-authorized");
		}

		Message.update( 
			{user_ids: Meteor.userId() },
			{
				$push: {
					messages: text
				}
			});

	}
});
