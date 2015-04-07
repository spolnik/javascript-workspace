define(['backbone', 'underscore', 'js/models/todo'], function (Backbone, _, Todo) {
    return Backbone.Collection.extend({
        model: Todo,
        url: 'http://localhost:8080/items/',

        initialize: function(){
            console.log('Creating a new Todo Items collection');

            this.on("remove", function(removedModel, models, options){
                console.log('element removed  at ' + options.index);
            });
        },

        activeItems: function () {
            return _.filter(this.models, function (item) {
                return !item.hasExpired();
            });
        },

        expiredItems: function () {
            return _.filter(this.models, function (item) {
                return item.hasExpired();
            });
        },

        done: function() {
            return this.where({done: true});
        },

        remaining: function() {
            return this.where({done: false});
        },

        comparator:  function(a, b) {
            return a.get('title') < b.get('title') ? -1 : 1;
        }
    });
});