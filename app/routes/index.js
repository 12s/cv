import Ember from 'ember';

const route = Ember.Route.extend({
    beforeModel() {
        this.transitionTo('summary');
    }
});

export default route;
