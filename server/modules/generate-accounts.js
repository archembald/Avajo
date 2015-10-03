let administrators = [
  {
    name: { first: 'Admin', last: 'McAdmin' },
    email: 'admin@admin.com',
    password: 'password'
  }
];

let generateAccounts = () => {
  let fakeUserCount = 2,
  usersExist    = _checkIfAccountsExist( administrators.length + fakeUserCount );

  if ( !usersExist ) {
    _createUsers( administrators );
    _createUsers( _generateFakeUsers( ) );
  }

  
};

let _checkIfAccountsExist = ( count ) => {
  let userCount = Meteor.users.find().count();
  return userCount < count ? false : true;
};

let _createUsers = ( users ) => {
  for ( let i = 0; i < users.length; i++ ) {
    let user       = users[ i ],
        userExists = _checkIfUserExists( user.email );

    if ( !userExists ) {
      _createUser( user );
    }
  }
};

let _checkIfUserExists = ( email ) => {
  return Meteor.users.findOne( { 'emails.address': email } );
};

let _createUser = ( user ) => {
  Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: {
      name: user.name
    }
  });
  
  var id = Meteor.users.findOne( { 'emails.address': user.email } )._id;
  
  UserLocation.insert({
  	user_id: id,
  	location: 
  			{
  				type: 'Point',
  				coordinates: [45, 64]
  			}
  });
  
  Interest.insert({
  	user_id: id,
  	interests: ['Meteor', 'Finance']
  });
  
};

let _generateFakeUsers = ( ) => {
  let users = [];

	users.push({
      name: { first: "Benjamin", last: "La Schiazza" },
      email: "ben@ben.com",
      password: 'password'
    });
    
    users.push({
      name: { first: "John", last: "Doe" },
      email: "john@john.com",
      password: 'password'
    });
  
  return users;
};

Modules.server.generateAccounts = generateAccounts;

