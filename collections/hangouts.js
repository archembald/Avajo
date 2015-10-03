Hangout = new Meteor.Collection( 'hangout' );

let HangoutSchema = new SimpleSchema({
  "title": {
  	type: String,
  	label: "Title of event."
  },
  "description": {
  	type: String,
  	label: "description"
  },
  "users": {
    type: [String],
    label: "Array of users in the hangout."
  },
  "waitlist" : {
    type: [String],
    label: "Array of users awaiting entry to event."
  },
  "chat_id": {
  	type: String,
  	label: "Id of the chat associated with this hangout.",
  	optional: true
  },
  "time": {
    type: Date,
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