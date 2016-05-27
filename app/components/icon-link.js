import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    classNames: ['img-circle'],
    attributeBindings: ['alt', 'width', 'height', 'src'],
    width: 100,
    height: 100,
    click() {
        // this.$().css('border-radius', '50%');
        $('img.img-circle').not(this.$()).fadeOut();
    }
});
