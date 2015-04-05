define(['backbone', 'underscore', 'js/models/todo'], function (Backbone, _, Todo) {
    return Backbone.Collection.extend({
        model: Todo,

        activeItems: function () {
            return _.filter(this.models, function (item) {
                return !item.hasExpired();
            });
        },

        expiredItems: function () {
            return _.filter(this.models, function (item) {
                return item.hasExpired();
            });
        }
    });
});