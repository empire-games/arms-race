"use strict";
(function () {

    const $ = require("jquery");

    $(".hello").click(function() {
        $("body").css("background-color","blue");
        console.log("clicked");
    });


})();