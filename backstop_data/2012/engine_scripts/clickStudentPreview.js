module.exports = function (engine, scenario, vp) {
    engine.wait(900).evaluate(function () {
      // Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
      studentpreview.enterStudentPreview();
      console.log('Clicking Student Preview Mode');
    })
    engine.wait(13000);
  };
  