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

    const mainSelector = "main .content";
    const inputSelector = mainSelector + " input";
    const buttonSelector = mainSelector + " button";
    const tabsSelector = ".tabs a span";

    $(tabsSelector).toArray().forEach(function (element) {
        $(element).on("click", function () {

            var addNewTodo = function () {
                if ($(inputSelector).val() !== "") {
                    todos.push($(inputSelector).val());
                    $(inputSelector).val("");
                }
            };

            var jqContent = null;
            var jqElement = $(element);
            $(tabsSelector).removeClass("active");
            jqElement.addClass("active");
            $(mainSelector).empty();

            if (jqElement.parent().is(":nth-child(1)")) {
                jqContent = $("<ul>");
                var index = todos.length - 1;
                while (index >= 0) {
                    jqContent.append($("<li>").text(todos[index]));
                    index -= 1;
                }
                $(mainSelector).append(jqContent);
            } else if (jqElement.parent().is(":nth-child(2)")) {
                jqContent = $("<ul>");
                todos.forEach(function (todo) {
                    jqContent.append($("<li>").text(todo));
                });
                $(mainSelector).append(jqContent);
            } else if (jqElement.parent().is(":nth-child(3)")) {
                jqContent = $("<input type=\"text\" /><button>+</button>");
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
