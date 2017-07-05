/**
 * Created by orrro on 7/5/2017.
 */

var main = function () {
    "use strict";

    $(".tabs a:nth-child(1)").on("click", function() {
        // make all tabs inactive
        $(".tabs span").removeClass("active");

        // make first tab active
        $(".tabs a:nth-child(1) span").addClass("active");
    });
};

$(document).ready(main);
