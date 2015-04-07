define([
    'js/collections/todos',
    'js/views/form',
    'js/views/todo-item'
], function (TodoCollection, FormView, TodoView) {

    var initialize = function () {
        console.log('app.init');
        var todoItems = new TodoCollection();

        todoItems.fetch({
            success: function(e) {
                console.log('Got data. Items now has ' + todoItems.size() + ' todo items.');

                new TodoView({
                    model: todoItems
                }).render();
            },
            error: function(e) {
                console.log('Something went wrong');
            }
        });

        new FormView().render();

        Backbone.history.start();
    };

    return {
        init: initialize
    };
});
