Message = new Meteor.Collection( 'message' );

Message.allow({
  insert: () => true,
  update: () => false,
  remove: () => false
});

let MessageSchema = new SimpleSchema({
  "user_id": {
    type: String,
    label: "The user who sent the chat"
  },
  "hangout_id": {
  	type: String,
  	label: "Hangout Id for this message"
  },
  "content": {
    type: String,
    label: "Message"
  },
  "time": {
  	type: Date,
  	label: "Time is was sent"
  }
});

Message.attachSchema( MessageSchema );