UserLocation = new Meteor.Collection( 'userlocation' );

let UserLocationSchema = new SimpleSchema({
  "user_id": {
    type: String,
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

UserLocation.attachSchema( UserLocationSchema );
