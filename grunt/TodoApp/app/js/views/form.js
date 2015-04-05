define(['backbone', 'js/template'], function(Backbone, Template) {
    return Backbone.View.extend({

        el: '#todo-form',

        template: Template["build/templates/form.hbs"],

        render: function() {
            var self = this;

            self.$el.append(
                this.template({command: 'Add Item'})
            );

            return self;
        }
    });
});
