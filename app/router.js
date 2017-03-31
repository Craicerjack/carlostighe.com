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
      this.route('character', { path: '/character/:character_id' });
  });
  this.route('d3', function() {
    this.route('bar');
    this.route('line');
    this.route('dataviz');
  });
  this.route('spotify', function() {
      this.route('playlists');
      this.route('playlist', { path: '/playlists/:playlist_id' });
  });
  this.route('star-wars');
  this.route('nasa');
  this.route('cycling');
  this.route('dataviz');
});

export default Router;
