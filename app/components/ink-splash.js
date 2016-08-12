import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['img-circle'],
    attributeBindings: ['alt', 'width', 'height', 'src'],
    click() {
        // this.$().css('border-radius', '50%');
        $('img.img-circle').not(this.$()).fadeOut();
    }
});
