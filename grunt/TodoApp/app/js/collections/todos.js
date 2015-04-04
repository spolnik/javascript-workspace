var _ = require('underscore');
var Todo = require('../models/todo');
var Backbone = require('backbone');

module.exports = Backbone.Collection.extend({

   model: Todo,

   activeItems: function () {
      return _.filter(this.models, function(item) { return !item.hasExpired(); });
   },

   expiredItems: function () {
      return _.filter(this.models, function(item) { return item.hasExpired(); });
   }
});