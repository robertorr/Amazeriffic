/**
 * Created by orrro on 7/5/2017.
 */

var main = function () {
    "use strict";

    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {

            var todos = [
                "Finish web apps book",
                "Take Sophia to the park",
                "Answer emails",
                "Prep for job search",
                "Make up new todos",
                "Get groceries"
            ];

            var jqElement = $(element);
            var mainSelector = "main .content";
            var inputSelector = mainSelector + " input";
            var buttonSelector = mainSelector + " button";

            var addNewTodo = function () {
                if ($(inputSelector).val() !== "") {
                    console.log("adding task: " + $(inputSelector).val());
                    todos.push($(inputSelector).val());
                    $(inputSelector).val("");
                    console.log("todos: " + todos);
                }
            };

            $(".tabs a span").removeClass("active");
            jqElement.addClass("active");
            $(mainSelector).empty();

            if (jqElement.parent().is(":nth-child(1)")) {
                console.log("todos: " + todos);
                var jqContent = $("<ul>");
                for (var index = todos.length - 1; index >= 0; --index) {
                    jqContent.append($("<li>").text(todos[index]));
                }
                $(mainSelector).append(jqContent);
            } else if (jqElement.parent().is(":nth-child(2)")) {
                console.log("todos: " + todos);
                var jqContent = $("<ul>");
                todos.forEach(function (todo) {
                   jqContent.append($("<li>").text(todo));
                });
                $(mainSelector).append(jqContent);
            } else if (jqElement.parent().is(":nth-child(3)")) {
                var jqContent = $("<input type=\"text\" /><button>+</button>");
                $(mainSelector).append(jqContent);
                $(inputSelector).on("keypress", function (event) {
                    if (event.keyCode === 13) {
                        addNewTodo();
                    }
                });
                $(buttonSelector).on("click", function () {
                    addNewTodo();
                });
            }
            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
