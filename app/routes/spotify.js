import Ember from 'ember';
// import playlists from 'carlostighe/models/playlist-fixtures';

export default Ember.Route.extend({
    beforeModel(/* transition */) {
        this.transitionTo('spotify.playlists'); // Implicitly aborts the on-going transition.
    }
});
