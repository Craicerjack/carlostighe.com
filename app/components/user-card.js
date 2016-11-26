import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['flex-45', 'user-card'],
    contentVisible: false,
    actions: {
        showContent() {
            let _this = this;
            let card = this.$().closest('md-card');
            $('.user-card').find('img').animate({ 
                opacity: "toggle"
            }, "slow", function() {
                _this.toggleProperty('contentVisible');
            });
        }
    }
});
