"use strict";
(function(){


    const $ = require("jquery");

    $("#rulesGame").hover(
        function() {
            $("#rulesGame").css("background-color", "#97836E");
            $('body').append( $("<span>  This is my rifle. There are many others like it, but this one is mine. " +
                "My rifle is my best friend. It is my life. I must master it as I must master my life. Without me, " +
                "my rifle is useless. Without my rifle, I am useless. I must fire my rifle true. I must shoot straighter " +
                "than my enemy, who is trying to kill me. I must shoot him before he shoots me. I will. Before God I swear " +
                "this creed: my rifle and myself are defenders of my country, we are the masters of our enemy, we are the " +
                "saviors of my life. So be it, until there is no enemy, but peace. Amen.</span>" ) );
        }, function() {
            $( 'body' ).find( "span:last" ).remove();
            $("#rulesGame").css("background-color", "whitesmoke");
        }
    );

    $("#creditGame").hover(
        function() {
            $("#creditGame").css("background-color", "#97836E");
            $('body').append( $("<span>Charles Hadden</span>") );
        }, function() {
            $( 'body' ).find( "span:last" ).remove();
            $("#creditGame").css("background-color", "whitesmoke");
        }
    );
    $("#newGame").hover(
        function() {
            $("#newGame").css("background-color", "#97836E");
            $('body').append( $( "<span>  Start a new game? </span>" ) );
        }, function() {
            $("#newGame").css("background-color", "whitesmoke");
            $( 'body' ).find( "span:last" ).remove();
        }
    );
    $("#continueGame").hover(
        function() {
            $("#continueGame").css("background-color", "#97836E");
            $('body').append( $( "<span>  Continue where you left off? </span>" ) );
        }, function() {
            $( 'body' ).find( "span:last" ).remove();
            $("#continueGame").css("background-color", "whitesmoke");
        }
    );

    $("#newGame").click(function() {
        console.log("begin game!!!");
        window.location.href='../html/game.html';
    });

    $("#continueGame").click(function() {
        console.log("continue game");
    });





})();