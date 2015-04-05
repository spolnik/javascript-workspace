define(['backbone', 'js/template'], function(Backbone, Template) {
    return Backbone.View.extend({

        el: '#todo-list',

        template: Template["build/templates/todo-list.hbs"],

        model: null,

        render: function() {
            var self = this;

            self.$el.append(
                this.template(this.model.toJSON())
            );

            console.log(this.model.toJSON());

            return self;
        }
    });
});
