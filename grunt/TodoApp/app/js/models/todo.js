'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        'title': '',
        'date': '19/02/2015',
        'complete': false
    },

    complete: function () {
        this.set('complete', true);
    },

    undo: function () {
        this.set('complete', true);
    }
});