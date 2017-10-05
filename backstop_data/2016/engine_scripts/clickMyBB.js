module.exports = function (engine, scenario, vp) {
  
  engine.wait(900).evaluate(function () {
      // Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
      globalNavMenu.onNavLinkClick();
      console.log('click my bb menu link');
    });

    engine.wait(900);
   
  };
  