module.exports = function (engine, scenario, vp) {
  engine.evaluate(function () {
    // Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
    document.getElementById("user_id").value="ui-admin";
    document.getElementById("password").value="ui-admin";
    document.getElementById("entry-login").click();
  });
  console.log('LOGGGGGGGIIIIIINNNNNNGGGGGGGGGGG INNNNNNNNNN');
};
