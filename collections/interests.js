Interest = new Meteor.Collection( 'interest' );

Interest.allow({
  insert: () => true,
  update: () => true,
  remove: () => false
});

let InterestSchema = new SimpleSchema({
  "user_id": {
    type: String,
    label: "The ID of the user who has these interests."
  },
  "interests": {
    type: [String],
    label: "Array of interests of the user."
  }
});

Interest.attachSchema( InterestSchema );
