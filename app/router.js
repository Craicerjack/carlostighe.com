import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('marvel', function() {
    this.route('characters');
    this.route('comics');
    this.route('creators');
    this.route('events');
    this.route('series');
    this.route('stories');
  });
  this.route('d3');
  this.route('spotify');
  this.route('star-wars');
  this.route('nasa');
  this.route('cycling');
  this.route('marvel-characters');
});

export default Router;
