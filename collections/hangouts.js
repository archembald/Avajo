Hangout = new Meteor.Collection( 'hangout' );

let HangoutSchema = new SimpleSchema({
  "hangout_id": {
    type: Number,
    label: "The ID of the hangout/event."
  },
  "users": {
    type: [Number],
    label: "Array of users in the hangout."
  },
  "chat_id": {
  	type: Number,
  	label: "Id of the chat associated with this hangout."
  },
  "time": {
    type: [Date],
    label: "Time of the hangout."
  },
  "location":  {
    type: Object,
    index: '2dsphere',
    label: 'Mongo 2dsphere coordinates'
  },
  'location.type': {
    type: String,
    allowedValues: ['Point'],
    label: 'Typeof coordinates - Point'
  },
  'location.coordinates': {
    type: [Number],
    decimal: true,
    label: 'Array of coordinates in MongoDB style\[Lng, Lat\]'
  }
});

Hangout.attachSchema( HangoutSchema );