Meteor.subscribe("hangout");
Meteor.subscribe("userlocation");

Template.hangouts.helpers({
  hangouts: function(){
    return Hangout.find();
  },
  userlocations: function(){
    return UserLocation.find();
  }
});