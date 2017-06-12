(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'labs-app',
      template: '<h1>Labs Top Secret Project</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
