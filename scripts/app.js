/**
 * Created by orrro on 7/5/2017.
 */

var main = function (todoObjs) {
    "use strict";

    const mainSelector = "main .content";
    const inputSelector = mainSelector + " input";
    const buttonSelector = mainSelector + " button";
    const tabsSelector = ".tabs a span";

    var todos = todoObjs.map(function (todo) {
        return todo.description;
    });
    var addNewTodo = function () {
        if ($(inputSelector).val() !== "") {
            todos.push($(inputSelector).val());
            $(inputSelector).val("");
        }
    };

    $(tabsSelector).toArray().forEach(function (element) {
        $(element).on("click", function () {

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
                console.log("tags tab clicked");

                var todosByTags = organizeByTag(todoObjs);
                todosByTags.forEach(function (tag) {
                    var jqTagName = $("<h3>").text(tag.name);
                    jqContent = $("<ul>");
                    tag.todos.forEach(function (description) {
                        var jqli = $("<li>").text(description);
                        jqContent.append(jqli);
                    });
                    $("main .content").append(jqTagName);
                    $("main .content").append(jqContent);
                });

            } else if (jqElement.parent().is(":nth-child(4)")) {
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

var organizeByTag = function (todoObjects) {
    "use strict";
    return null;
};

$(document).ready(function () {
    "use strict";
    $.getJSON("todos.json", function (todoObjects) {
        main(todoObjects);
    });
});
