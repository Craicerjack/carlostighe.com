import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'svg',
    margin: { top: 20, right: 80, bottom: 30, left: 50 },
    width: Ember.computed('didInsertElement', 'didUpdateAttrs', function() {
                if (this.$()) { return this.$().parent().width(); }
    }),
    height: Ember.computed('margin', function() {
        return 500 - this.get('margin.top') - this.get('margin.bottom');
    }),
    x: Ember.computed('width', function() {
        return d3.scaleTime().range([0, this.get('width')]);
    }),
    y: Ember.computed('height', function() {
       return d3.scaleLinear().range([this.get('height'), 0]); 
    })
});
