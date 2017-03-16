import Ember from 'ember';
import playlists from 'carlostighe/models/playlist-fixtures';

export default Ember.Route.extend({
    model() {
        return playlists;
    }
});
