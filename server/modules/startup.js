let startup = () => {
  _setBrowserPolicies();
  
if(Meteor.users.find().count() < 1)
{
  Accounts.createUser({
    email: "ben@ben.com",
    password: "password",
    profile: {
      name: { first: 'ben', last: 'ben' },
    }
  });
  
  
  UserLocation.insert({
  	user_id: Meteor.users.findOne( { 'emails.address': "ben@ben.com" } )._id,
  	location: 
  			{
  				type: 'Point',
  				coordinates: [45, 64]
  			}
  });
  
  Interest.insert({
  	user_id: Meteor.users.findOne( { 'emails.address': "ben@ben.com" } )._id,
  	interests: ['Meteor', 'Finance']
  });
}

};

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;

