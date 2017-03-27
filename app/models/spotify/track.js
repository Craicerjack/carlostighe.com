import DS from 'ember-data';

export default DS.Model.extend({
    "title": DS.attr(),
    "href": DS.attr(),
    "explicit": DS.attr('boolean'),
    "duration": DS.attr(),
    "alname": DS.attr(),
    "image": DS.attr(),
    "artists": DS.attr(),
    "playlist": DS.belongsTo('spotify.playlist')
});
