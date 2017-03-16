import Ember from 'ember';

export default Ember.Controller.extend({
    background: Ember.computed('model', function() {
        let model = this.get('model');
        let url = model.thumbnail.path+"."+model.thumbnail.extension;
        let style = "background: url(" + url +");"; // -webkit-filter: blur(3px); filter: blur(3px); opacity: .6;"
        let ev = this.get('ember-view');
        ev.css('background', Ember.String.htmlSafe(style));
    })
});
