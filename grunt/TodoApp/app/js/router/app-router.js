define(['backbone'], function(Backbone) {
    'use strict';

    return Backbone.Router.extend({

        routes: {'' : 'start', '*default': 'defaultRoute' },

        start: function(){
            console.log('Initial route invoked');
        },

        defaultRoute: function(){
            console.log('Router does not handle this route');
        }
    });
});
