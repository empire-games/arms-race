"use strict";
(function () {

    const $ = require("jquery");

    let gold = "";
    let builds = "";
    let levelText = "";
    let twentyTwoPistol = {createTime: 30, reward: 1000, cost:0, employee:1, upgradeCost:500};
    let twentyTwoRifle = {createTime: 60, reward: 50, cost:220, employee:1, upgradeCost:1000};
    let nineMM = {createTime: 90, reward: 100, cost:1000, employee:1, upgradeCost:2000};
    let fortyCal = {createTime: 120, reward: 500, cost:2000, employee:1, upgradeCost:3000};
    let colt45 = {createTime: 150, reward: 1000, cost:5000, employee:1, upgradeCost:5000};

    $(".quit").click(function() {
        window.location.href='../html/index.html';
        console.log("clicked");
    });

    $(".ready").click(function() {
        $("#ready-head").hide();
        $(".ready").hide();
        gameScreen();
    });

    function gameScreen() {
        move22pistol();
        $( "#ready-screen" ).append(levelText);
        gold = 5;
        builds = 0;
        $("#gold").append(gold);
        $("#builds").append(builds);
    }

    $("#22employ").click(function() {
        if(gold >= twentyTwoPistol.upgradeCost) {
            $("#22employ").hide();
            gold -= twentyTwoPistol.upgradeCost;
            $("#gold").html("Gold: " + gold);
            twentyTwoPistol.employee++;
            $("#myBar").append(twentyTwoPistol.employee);
            console.log(twentyTwoPistol.employee);
        }
    });
    $("#22longemploy").click(function() {
        if(gold >= twentyTwoRifle.upgradeCost) {
            $("#22longemploy").hide();
            gold -= twentyTwoRifle.upgradeCost;
            $("#gold").html("Gold: " + gold);
            twentyTwoRifle.employee++;
            $("#myBar22rifle").append(twentyTwoRifle.employee);
            console.log(twentyTwoRifle.employee)
        }
    });
    $("#9employ").click(function() {
        if(gold >= nineMM.upgradeCost) {
            $("#9employ").hide();
            gold -= nineMM.upgradeCost;
            $("#gold").html("Gold: " + gold);
            nineMM.employee++;
            $("#myBar9mm").append(nineMM.employee);
            console.log(nineMM.employee);
        }
    });
    $("#40employ").click(function() {
        if(gold >= fortyCal.upgradeCost) {
            $("#40employ").hide();
            gold -= fortyCal.upgradeCost;
            $("#gold").html("Gold: " + gold);
            fortyCal.employee++;
            $("#myBar40cal").append(fortyCal.employee);
            console.log(fortyCal.employee);
        }
    });
    $("#45employ").click(function() {
        if(gold >= colt45.upgradeCost) {
            $("#45employ").hide();
            gold -= colt45.upgradeCost;
            $("#gold").html("Gold: " + gold);
            colt45.employee++;
            $("#myBarcolt45").append(colt45.employee);
            console.log(colt45.employee);
        }
    });




    $("#22").click(function() {
        if(gold >= 220) {
            $("#myProgress22rifle").show();
            $("#myBar22rifle").show();
            $("#22").hide();
            gold -= twentyTwoRifle.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i>" + gold);
            move22rifle();
        } else {
            console.log("yallo")
        }
    });
    $("#9").click(function() {
        if(gold >= 1000) {
            $("#myProgress9mm").show();
            $("#myBar9mm").show();
            $("#9").hide();
            gold -= nineMM.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            move9mm();
        } else {
            console.log("yallo")
        }
    });
    $("#40").click(function() {
        if(gold >= 2000) {
            $("#myProgress40cal").show();
            $("#myBar40cal").show();
            $("#40").hide();
            gold -= fortyCal.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            move40cal();
        } else {
            console.log("yallo")
        }
    });
    $("#45").click(function() {
        if(gold > 5000) {
            $("#myProgresscolt45").show();
            $("#myBarcolt45").show();
            $("#45").hide();
            gold -= colt45.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            movecolt45();
        } else {
            console.log("yallo")
        }
    });


    function building() {

        $("#myProgress").click(function () {
            $("#myProgress").off();
            move22pistol();
        });
    }

    function building22rifle() {
        $("#myProgress22rifle").click(function() {
            $("#myProgress22rifle").off();
            move22rifle();
        })
    }
    function building9mm() {
        $("#myProgress9mm").click(function() {
            $("#myProgress9mm").off();
            move9mm();
        })
    }
    function building40cal() {
        $("#myProgress40cal").click(function () {
            $("#myProgress40cal").off();
            move40cal();
        });
    }
    function buildingcolt45() {
        $("#myProgresscolt45").click(function () {
            $("#myProgresscolt45").off();
            movecolt45();
        });
    }

    function move22pistol() {
        console.log("building....");
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, twentyTwoPistol.createTime / twentyTwoPistol.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                building();
                gold += twentyTwoPistol.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    function move22rifle() {
        console.log("buildingrifle....");
        let elem = document.getElementById("myBar22rifle");
        let width = 1;
        let id = setInterval(frame, twentyTwoRifle.createTime / twentyTwoRifle.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                building22rifle();
                gold += twentyTwoRifle.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function move9mm() {
        console.log("building9mm....");
        let elem = document.getElementById("myBar9mm");
        let width = 1;
        let id = setInterval(frame, nineMM.createTime / nineMM.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                building9mm();
                gold += nineMM.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function move40cal() {
        console.log("building40cal....");
        let elem = document.getElementById("myBar40cal");
        let width = 1;
        let id = setInterval(frame, fortyCal.createTime / fortyCal.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                building40cal();
                gold += fortyCal.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function movecolt45() {
        console.log("buildingcolt45....");
        let elem = document.getElementById("myBarcolt45");
        let width = 1;
        let id = setInterval(frame, colt45.createTime / colt45.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                buildingcolt45();
                gold += colt45.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
})();