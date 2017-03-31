import Ember from 'ember';

export function trackDuration(params/*, hash*/) {
    if (!!params) {
        // accepts an array of with milliseconds and returns a formatted string of mins:secs 
        const secs = parseInt((params[0]/1000) % 60);
        // << 0  is Math.floor via an implicit int cast. Second part ensures a 0 is seconds are less than 10
        return ((params[0]/1000/60) << 0 ) + ':' + ( secs < 10 ? `0${secs}` : secs);
    } else {
        return;
    }
}

export default Ember.Helper.helper(trackDuration);
