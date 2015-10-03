let startup = () => {
  _setBrowserPolicies();
  _generateAccounts();
};

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;

//Insert dummy data
var flag = true;

if(flag)
{



}
