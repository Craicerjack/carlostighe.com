import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').findRecord('spotify/playlist', params.playlist_id, { include: 'spotify.tracks' });
    }
});
