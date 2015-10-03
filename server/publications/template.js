Meteor.publish('template', function() {
	return Collection.find( { 'owner': this.userId }, { fields: { 'owner': 1 } } );
});

Meteor.publish('userlocation', function() {
	return Account.find( { 'user_id': this.userId } );
});

Meteor.publish('interests', function() { 
	return Interest.find( { 'user_id': this.userId } );
}); 

Meteor.publish('messages', function(chatId){
	return Message.find( { 'chat_id': chatId } );
});

Meteor.publish('hangout', function(){
	return Hangout.find( {'users': this.userId } );
});