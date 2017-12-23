import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route("summary");
    this.route("ver");
    this.route("americanapparel");
    this.route("gherytechnologies");
    this.route("calpoly");
    this.route("notredame");
    this.route("skills");
    this.route("interests");
    this.route("influences");
});

export default Router;
