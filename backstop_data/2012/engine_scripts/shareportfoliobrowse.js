module.exports = function(casper, scenario, vp) {
    casper.then(function(){

        this.evaluate(function(){
            console.log("clicking the button");
            launchCoursePicker_course_ids();
        });
    });
};