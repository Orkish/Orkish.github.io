var app = app || {};

app.Winson = Backbone.Model.extend({
  idAttribute: 'slug',
  defaults: {
    name: 'Winnie',
    bio: 'My bio'
  }
});