module.exports = function(casper, scenario, vp) {
    casper.then(function(){
        console.log("Login using username and password");
        this.evaluate(function(){
            document.getElementById("user_id").value="ui-admin";
            document.getElementById("password").value="ui-admin";
            document.getElementById("entry-login").click();
        });
    });
}