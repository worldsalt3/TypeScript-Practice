"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var data = response.data;
    var id = data.id, title = data.title, completed = data.completed;
    console.log("The ID is ".concat(id, " with a Title of ").concat(title, " and is it completed? ").concat(completed, " "));
});
