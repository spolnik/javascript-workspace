/**
 * A simple API hosted under localhost:8080/items
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var itemId = 100;

function findItem(id) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return items[i];
        }
    }

    return null;
}

function removeItem(id) {
    var itemIndex = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            itemIndex = i;
        }
    }
    items.splice(itemIndex, 1);
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var items = [
    {id: 98, title: 'Item 1', date: new Date(), complete: false},
    {id: 99, title: 'Item 2', date: new Date(), complete: false}
];

/**
 * HTTP GET /items
 * Should return a list of items
 */
app.get('/items', function (request, response) {
    response.header('Access-Control-Allow-Origin', '*');
    console.log('In GET function ');
    response.json(items);
});

/**
 * HTTP GET /items/:id
 * id is the unique identifier of the item you want to retrieve
 * Should return the item with the specified id, or else 404
 */
app.get('/items/:id', function (request, response) {
    response.header('Access-Control-Allow-Origin', '*');
    console.log('Getting an item with id ' + request.params.id);
    var item = findItem(parseInt(request.params.id, 10));
    if (item === null) {
        response.send(404);
    } else {
        response.json(item);
    }
});

/**
 * HTTP POST /items/
 * The body of this request contains the item you are creating.
 * Returns 200 on success
 */
app.post('/items', function (request, response) {
    response.header('Access-Control-Allow-Origin', '*');

    var item = request.body;
    console.log('Saving item with the following structure ' + JSON.stringify(item));
    item.id = itemId++;
    items.push(item);
    response.send(item);
});

/**
 * HTTP PUT /items/
 * The id is the unique identifier of the item you wish to update.
 * Returns 404 if the item with this id doesn't exist.
 */
app.put('/items/:id', function (request, response) {
    response.header('Access-Control-Allow-Origin', '*');
    var item = request.body;
    console.log('Updating Item ' + JSON.stringify(item));

    var currentItem = findItem(parseInt(request.params.id,10));
    if (currentItem === null) {
        response.send(404);
    } else {
        currentItem.title = item.title;
        currentItem.date = item.date;
        currentItem.complete = item.complete;

        response.send(item);
    }
});

/**
 * HTTP DELETE /items/
 * The id is the unique identifier of the item you wish to delete.
 * Returns 404 if the item with this id doesn't exist.
 */
app.delete('/items/:id', function (request, response) {
    console.log('calling delete');
    response.header('Access-Control-Allow-Origin', '*');
    var item = findItem(parseInt(request.params.id, 10));
    if(item === null){
        console.log('Could not find item');
        response.send(404);
    }
    else
    {
        console.log('Deleting ' + request.params.id);
        removeItem(parseInt(request.params.id, 10));
        response.send(200);
    }
    response.send(200);
});

//additional setup to allow CORS requests
var allowCrossDomain = function(req, response, next) {
    response.header('Access-Control-Allow-Origin', "http://localhost");
    response.header('Access-Control-Allow-Methods', 'OPTIONS, GET,PUT,POST,DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');

    if ('OPTIONS' == req.method) {
        response.send(200);
    }
    else {
        next();
    }
};

app.use(allowCrossDomain);

//start up the app on port 8080
app.listen(8080);