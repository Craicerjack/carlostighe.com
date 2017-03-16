import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            { character_id: '1009165', src: 'assets/images/avengers.png' },
            { character_id: '1009220', src: 'assets/images/cap.png' },
            { character_id: '1009299', src: 'assets/images/fantasticfour.png' },
            { character_id: '1009368', src: 'assets/images/ironman.png' },
            { character_id: '1009610', src: 'assets/images/spidey.png' },
            { character_id: '1009664', src: 'assets/images/thor.png' },
            { character_id: '1009726', src: 'assets/images/xmen.png '},
            { character_id: '1009351', src: 'assets/images/hulk.png '},
            { character_id: '1009262', src: 'assets/images/dd.png '},
            { character_id: '1009515', src: 'assets/images/punisher.png '},
            { character_id: '1009189', src: 'assets/images/blackwidow.png '},
            { character_id: '1009268', src: 'assets/images/deadpool.png '},
            //{ character_id: '1009338', src: 'assets/images/hawkeye.png '}
        ];
    }
});