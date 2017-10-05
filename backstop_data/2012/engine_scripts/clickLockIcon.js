module.exports = function (engine, scenario, vp) {
    engine.wait(900).evaluate(function () {
      // Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
      document.getElementsByClassName('lock-unlock-toggle')[0].getElementsByTagName('a')[0].click();
      console.log('Clicking Lock Icon');
    })
    engine.wait(3000);
  };
  