import DS from 'ember-data';

export default DS.Model.extend({
    "title": DS.attr(''),
    "image": DS.attr(''),
    "total": DS.attr(''),
    "tracks": DS.hasMany('spotify.track')
});
