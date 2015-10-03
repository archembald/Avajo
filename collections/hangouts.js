Hangout = new Meteor.Collection( 'hangout' );

Hangout.allow({
  insert: () => true,
  update: () => true, //So that users may leave the hangout
  remove: () => false
});

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