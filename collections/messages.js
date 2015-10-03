Message = new Meteor.Collection( 'message' );

let MessageSchema = new SimpleSchema({
  "user_ids": {
    type: [String],
    label: "The ids of users that are involved in the chat."
  },
  "messages": {
    type: [String],
    label: "Messages in the chat."
  }
});

Message.attachSchema( MessageSchema );