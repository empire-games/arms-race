"use strict";
(function () {

    const $ = require("jquery");

    $(".hello").click(function() {
        window.location.href='../html/game.html';
        console.log("clicked");
    });



})();