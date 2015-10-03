Meteor.subscribe("hangout");

Template.hangouts.helpers({
  hangounts: function(){
    return Hangout.find();
  }
});