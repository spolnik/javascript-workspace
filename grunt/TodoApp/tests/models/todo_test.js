'use strict';

exports.todo = {
    setUp: function (done) {
        var Todo = require('../../app/js/models/todo');

        this.todo = new Todo({
            'title': 'Test Item',
            'date': '24/02/2014'
        });
        done();
    },
    item_has_a_title: function (test) {
        test.equal(this.todo.get('title'), 'Test Item');
        test.done();
    },
    item_is_not_complete: function (test) {
        test.equal(this.todo.get('complete'), false);
        test.done();
    },
    item_can_be_completed: function (test) {
        this.todo.complete();
        test.ok(this.todo.get('complete'));
        test.done();
    }
};
