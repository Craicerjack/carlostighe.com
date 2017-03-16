import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  modified: DS.attr('date'),
  resourceURI: DS.attr('string'),
  urls: DS.hasMany('url'),
  thumbnail: DS.attr('string'),
  comics: DS.hasMany('comic'),
  stories: DS.hasMany('story'),
  events: DS.hasMany('event'),
  series: DS.hasMany('series')
});
