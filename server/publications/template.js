Meteor.publish('template', function() {
	return Collection.find( { 'owner': this.userId }, { fields: { 'owner': 1 } } );
});

Meteor.publish('userlocation', function() {
	return UserLocation.find( { 'user_id': this.userId } );
});

Meteor.publish('interests', function() { 
	return Interest.find( { 'user_id': this.userId } );
}); 

Meteor.publish('messages', function(hangoutId){
	return Message.find( { 'hangout_id': hangoutId } );
});

Meteor.publish('hangout', function(){
	return Hangout.find( {'users': this.userId } );
});