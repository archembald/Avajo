Account = new Meteor.Collection( 'accounts' );

let AccountSchema = new SimpleSchema({
  "user_id": {
    type: Number,
    label: "The user id of the account owner."
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

Account.attachSchema( AccountSchema );
