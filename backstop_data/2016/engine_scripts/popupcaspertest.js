module.exports = function(casper, scenario, vp) {
    casper.then(function(){
        this.evaluate(function(){
            console.log("is this test even runnning")
        });
    });
};