var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('add');
});

export default Router;
