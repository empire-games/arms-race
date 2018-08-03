"use strict";
(function () {

    const $ = require("jquery");

    let level = 1;
    let gold = "";
    let wood = "";
    let leather = "";
    let builds = "";
    let employees = "";

    $(".quit").click(function() {
        window.location.href='../html/index.html';
        console.log("clicked");
    });

    $(".ready").click(function() {
        $("#ready-head").hide();
        $(".ready").hide();
        whichLevel();
    });

    function whichLevel() {
        if(level === 1) {
            levelOne();
        } else if(level === 2) {
            levelTwo();
        } else {
            console.log("woahhh")
        }
    }

    //========Level 1=========\\
    const name="";
    function levelOne() {
        $( "#ready-screen" ).append( "<p>The year is 3075 bc. You are a local blacksmith and the only one with knowledge" +
            " of creating a simple sling. You will need to create 6 simple slings so your tribe hunters can gather meat for your tribe." +
            " First you will need the material...Lucky for you the hunters are desperate and have gathered" +
            " it for you.</p> " );
        gold = 5;
        wood = 20;
        leather = 10;
        builds = 0;
        employees = 1;
        level = 1;
        $("#gold").append(gold);
        $("#wood").append(wood);
        $("#leather").append(leather);
        $("#builds").append(builds);
        $("#level").append(level);
        buildFirst();
        building();

    }

    function buildFirst() {
        $("#myBar").show();
        $("#ready-screen").append("<div class=\"card\" style=\"width: 18rem;\">\n" +
            "  <img class=\"card-img-top\" src=\"../img/sling.jpeg\" alt=\"Card image cap\">\n" +
            "  <div class=\"card-body\">\n" +
            "    <h5 class=\"card-title\">Sling</h5>\n" +
            "    <p class=\"card-text\">A sling is a projectile weapon typically used to throw a blunt projectile such as a stone, clay, or lead</p>\n" +
            "    <a href=\"#\" id=\"build-it\" class=\"btn btn-primary\">Build</a>\n" +
            "  </div>\n" +
            "</div>");
    }

    function building() {
        $("#build-it").click(function () {
            $("#build-it").off('click');
            move();
            if (builds === 2) {
                buildComplete();
            } else {
                if (leather > 0) {
                    leather--;
                    builds++;
                    $("#leather").html("Leather= " + leather);
                    $("#builds").html("Builds= " + builds);
                } else {
                    console.log("not enough material")
                }
            }
        });
    }

        function buildComplete() {
            $("#ready-screen").html("<img src='../img/succhunt.jpg' />" +
                "The hunters had a very successful hunt thanks to your fine craftsmanship" + "<a href=\"#\" id=\"levelup\" class=\"btn btn-primary\">Next Level</a>");
            $("#myBar").hide();

            level++;
            $("#levelup").click(function() {
                levelTwo();
                console.log("hello");
            });
            }




    function move() {
        console.log("building....");
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 30 / employees);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                building();
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    //=========continue game===========\\
    $(".back-to-game").click(function() {
        window.location.href='../html/game.html';
    });

    function levelTwo() {
        $("#myBar").show();
        $( "#ready-screen" ).html( "<p>The hunters had a very succesful hunt. While on the hunt they discovered a new " +
            "item. They want you to build 10 of these as a prototype.</p>" );
        gold = 5;
        wood = 20;
        leather = 10;
        builds = 0;
        employees = 1;
        level =2;
        $("#gold").html("Gold= " + gold);
        $("#wood").html("Wood= " + wood);
        $("#leather").html("Leather= " + leather);
        $("#builds").html("Builds= " + builds);
        $("#level").html("Level= " + level);
        buildFirst2();
        building2();

    }

    function buildFirst2() {
        $("#ready-screen").append("<div class=\"card\" style=\"width: 18rem;\">\n" +
            "  <img class=\"card-img-top\" src=\"../img/bow.jpeg\" alt=\"Card image cap\">\n" +
            "  <div class=\"card-body\">\n" +
            "    <h5 class=\"card-title\">Bow and Arrow</h5>\n" +
            "    <p class=\"card-text\">The bow and arrow is a ranged weapon system consisting of an elastic launching device (bow) and long-shafted projectiles (arrows).</p>\n" +
            "    <a href=\"#\" id=\"build-it\" class=\"btn btn-primary\">Build</a>\n" +
            "  </div>\n" +
            "</div>");
    }
    function building2() {
        $("#build-it").click(function () {
            $("#build-it").off('click');
            move2();
            if (builds === 10) {
                buildComplete2();
            } else {
                if (wood > 0) {
                    wood--;
                    builds++;
                    $("#wood").html("Wood= " + wood);
                    $("#builds").html("Builds= " + builds);
                } else {
                    console.log("not enough material")
                }
            }
        });
    }

    function buildComplete2() {
        window.location.href='../html/congrats.html';
        level++;
    }

    function move2() {
        console.log("building....");
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 30 / employees);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                building();
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
})();