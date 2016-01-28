//index.js

var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : 'https://test.salesforce.com',
    clientId : '3MVG9dPGzpc3kWyfI_rWPaInBayKLVNEk8nEb_zzCpnbMpIDYn2G7KFmKl_Uge3F2_j8wpQR3430UueGtzSEr',
    clientSecret : '4034892621271274833',
    redirectUri : ''
  }
});

conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ...
});