Interest = new Meteor.Collection( 'interest' );

let InterestSchema = new SimpleSchema({
  "user_id": {
    type: Number,
    label: "The ID of the user who has these interests."
  },
  "interests": {
    type: [String],
    label: "Array of interests of the user."
  }
});

Interest.attachSchema( InterestSchema );
