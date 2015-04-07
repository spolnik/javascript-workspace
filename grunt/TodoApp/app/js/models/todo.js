define(['backbone'], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({

        initialize: function() {
            this.on("invalid", function(model, error){
                console.log("**Validation Error : " + error + "**");
            });
        },

        defaults: {
            id: null,
            title: '',
            date: '19/02/2015',
            done: false
        },

        toggle: function () {
            this.save({done: !this.get('done')});
        },

        hasExpired: function () {
            return new Date(this.get('date')) < new Date();
        },

        validate: function (attrs) {
            if (!attrs.title) {
                return 'A title must be provided';
            }
        }
    });
});