Message = new Meteor.Collection( 'message' );

let MessageSchema = new SimpleSchema({
  "chat_id": {
    type: Number,
    label: "The chat id."
  },
  "user_ids": {
    type: [Number],
    label: "The ids of users that are involved in the chat."
  },
  "messages": {
    type: [String],
    label: "Messages in the chat."
  }
});

Message.attachSchema( MessageSchema );