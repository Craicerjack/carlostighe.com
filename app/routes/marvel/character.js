import Ember from 'ember';
import config from 'carlostighe/config/environment';
import $ from 'jquery';

export default Ember.Route.extend({
    model(req) {
        let url = 'http://gateway.marvel.com:80/v1/public/characters/' + req.character_id + "?apikey=" + config.marv_key;
        return $.getJSON(url).then(function(json) {
            return json.data.results[0];
        });
    }   
});
