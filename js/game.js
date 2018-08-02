"use strict";
(function () {

    const $ = require("jquery");

    $(".quit").click(function() {
        window.location.href='../html/index.html';
        console.log("clicked");
    });

    $(".ready").click(function() {
        $("#ready-head").hide();
        $(".ready").hide();
        beginGame();

    });
    //========Level 1=========\\
    const name="";
    function beginGame() {
        $( "#ready-screen" ).append( "<p>The year is 3075 bc. You are a local blacksmith and the only one with knowledge" +
            "of creating a simple sling. You will need to create 6 simple slings so your tribe hunters can gather meat for your tribe.</p>" );

    }





})();