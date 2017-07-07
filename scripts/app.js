/**
 * Created by orrro on 7/5/2017.
 */

var main = function () {
    "use strict";

    var todos = [
        "Finish web apps book",
        "Take Sophia to the park",
        "Answer emails",
        "Prep for job search",
        "Make up new todos",
        "Get groceries"
    ];

    const tabsSelector = ".tabs a span";
    $(tabsSelector).toArray().forEach(function (element) {
        $(element).on("click", function () {

            var jqElement = $(element);
            const mainSelector = "main .content";
            const inputSelector = mainSelector + " input";
            const buttonSelector = mainSelector + " button";

            var addNewTodo = function () {
                if ($(inputSelector).val() !== "") {
                    console.log("adding task: " + $(inputSelector).val());
                    todos.push($(inputSelector).val());
                    $(inputSelector).val("");
                    console.log("todos: " + todos);
                }
            };

            $(tabsSelector).removeClass("active");
            jqElement.addClass("active");
            $(mainSelector).empty();

            if (jqElement.parent().is(":nth-child(1)")) {
                console.log("todos: " + todos);
                var jqContent1 = $("<ul>");
                var index = todos.length - 1;
                while (index >= 0) {
                    jqContent1.append($("<li>").text(todos[index]));
                    index -= 1;
                }
                $(mainSelector).append(jqContent1);
            } else if (jqElement.parent().is(":nth-child(2)")) {
                console.log("todos: " + todos);
                var jqContent2 = $("<ul>");
                todos.forEach(function (todo) {
                    jqContent2.append($("<li>").text(todo));
                });
                $(mainSelector).append(jqContent2);
            } else if (jqElement.parent().is(":nth-child(3)")) {
                var jqContent3 = $("<input type=\"text\" /><button>+</button>");
                $(mainSelector).append(jqContent3);
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
