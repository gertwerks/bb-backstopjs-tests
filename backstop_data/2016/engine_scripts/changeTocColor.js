module.exports = function(casper, scenario, vp) {
    casper.then(function(){
        this.evaluate(function(){
            console.log("CLICKING COLOR PICKER");
            $j("#navTextColor_link").find("img").click();
            
            var currentColor = $j("#navTextColor_title_color").val();
            if ( currentColor === "333333") {
                $j("#navTextColor_title_color").val("ccff77");
                console.log('makiing it green');
            } else {
                $j("#navTextColor_title_color").val("333333");
                 console.log('makiing it gray');
            }
            
            $j("#navTextColor_submitButton").click();

            $j(".submit").click();
        });
    });
}