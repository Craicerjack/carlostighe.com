import Ember from 'ember';

export default Ember.Controller.extend({
    url: Ember.computed('model', function() {
        return this.get('model.thumbnail.path')+"."+this.get('model.thumbnail.extension');
    });
});
