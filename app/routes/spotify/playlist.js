import Ember from 'ember';
import tracks from 'carlostighe/models/spotify/rock-fixtures';

export default Ember.Route.extend({
    model(params) {
        if (params.playlist_id === "4DMpRqdbjtIADyAZy4yKwx") {
            console.log(" - true");
            return tracks.map(function(item) {
                return {
                    "explicit": item.track.explicit,
                    "external_urls": item.track.external_urls.spotify,
                    "href": item.track.href,
                    "id": item.track.id,
                    "name": item.track.name,
                    "image": item.track.album.images[1].url,
                    "artists": item.track.album.artists.map( x => x.name).join(", "),
                    "album": item.track.album.name
                }
            });
        }
    }
});
