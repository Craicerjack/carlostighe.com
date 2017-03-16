import Ember from 'ember';

export default Ember.Controller.extend({
    didInsertElement() {
        $(".circle-container").animate({width:'toggle'},5000);
    }
});
