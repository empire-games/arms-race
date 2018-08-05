"use strict";
(function () {

    const $ = require("jquery");
    let enabled = true;
    let enabled22 = true;
    let enabled9 = true;
    let enabled40 = true;
    let enabled45 = true;
    let enabled47 = true;
    let enabledscar = true;
    let enabled60 = true;
    let enabledgrenade = true;
    let enabledabrams = true;
    let enabledf22 = true;

    let gold = "";
    let builds = "";
    let levelText = "";
    let twentyTwoPistol = {createTime: 30, reward: 1000, cost:0, employee:1, upgradeCost:500, managerCost:10000};
    let twentyTwoRifle = {createTime: 60, reward: 50, cost:220, employee:1, upgradeCost:1000, managerCost:15000};
    let nineMM = {createTime: 90, reward: 100, cost:1000, employee:1, upgradeCost:2000, managerCost:20000};
    let fortyCal = {createTime: 120, reward: 500, cost:2000, employee:1, upgradeCost:3000, managerCost:30000};
    let colt45 = {createTime: 150, reward: 1000, cost:3000, employee:1, upgradeCost:5000, managerCost:50000};
    let ak47 = {createTime: 300, reward: 3000, cost:5000, employee:1, upgradeCost:7000, managerCost:70000};
    let scar = {createTime: 500, reward: 5000, cost:7000, employee:1, upgradeCost:10000, managerCost:100000};
    let m60 = {createTime: 1000, reward: 10000, cost:60000, employee:1, upgradeCost:20000, managerCost:200000};
    let grenadeLauncher = {createTime: 1500, reward: 30000, cost:30000, employee:1, upgradeCost:50000, managerCost:500000};
    let abrams = {createTime: 5000, reward: 60000, cost:1000000, employee:1, upgradeCost:200000, managerCost:2000000};
    let f22 = {createTime: 10000, reward: 1000000, cost:1000000, employee:1, upgradeCost:5000000, managerCost:50000000};



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
//========buying employee functions=======\\
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
    $("#47employ").click(function() {
        if(gold >= ak47.upgradeCost) {
            $("#47employ").hide();
            gold -= ak47.upgradeCost;
            $("#gold").html("Gold: " + gold);
            ak47.employee++;
            $("#myBarak47").append(ak47.employee);
            console.log(ak47.employee);
        }
    });
    $("#scaremploy").click(function() {
        if(gold >= scar.upgradeCost) {
            $("#scaremploy").hide();
            gold -= scar.upgradeCost;
            $("#gold").html("Gold: " + gold);
            scar.employee++;
            $("#myBarscar").append(scar.employee);
            console.log(scar.employee);
        }
    });
    $("#60employ").click(function() {
        if(gold >= m60.upgradeCost) {
            $("#60employ").hide();
            gold -= m60.upgradeCost;
            $("#gold").html("Gold: " + gold);
            m60.employee++;
            $("#myBarm60").append(m60.employee);
            console.log(m60.employee);
        }
    });
    $("#grenadeemploy").click(function() {
        if(gold >= grenadeLauncher.upgradeCost) {
            $("#grenadeemploy").hide();
            gold -= grenadeLauncher.upgradeCost;
            $("#gold").html("Gold: " + gold);
            grenadeLauncher.employee++;
            $("#myBargrenadeLauncher").append(grenadeLauncher.employee);
            console.log(grenadeLauncher.employee);
        }
    });
    $("#abramsemploy").click(function() {
        if(gold >= abrams.upgradeCost) {
            $("#abramsemploy").hide();
            gold -= abrams.upgradeCost;
            $("#gold").html("Gold: " + gold);
            abrams.employee++;
            $("#myBarabrams").append(abrams.employee);
            console.log(abrams.employee);
        }
    });
    $("#f22employ").click(function() {
        if(gold >= f22.upgradeCost) {
            $("#f22employ").hide();
            gold -= f22.upgradeCost;
            $("#gold").html("Gold: " + gold);
            f22.employee++;
            $("#myBarf22").append(f22.employee);
            console.log(f22.employee);
        }
    });


//=============buying functions============\\

    $("#22").click(function() {
        if(gold >= twentyTwoRifle.cost) {
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
        if(gold >= nineMM.cost) {
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
        if(gold >= fortyCal.cost) {
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
        if(gold >=  colt45.cost) {
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
    $("#47").click(function() {
        if(gold >= ak47.cost) {
            $("#myProgressak47").show();
            $("#myBarak47").show();
            $("#47").hide();
            gold -= ak47.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            moveak47();
        } else {
            console.log("yallo")
        }
    });
    $("#scar").click(function() {
        if(gold >= scar.cost) {
            $("#myProgressscar").show();
            $("#myBarscar").show();
            $("#scar").hide();
            gold -= scar.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            movescar();
        } else {
            console.log("yallo")
        }
    });
    $("#60").click(function() {
        if(gold >= m60.cost) {
            $("#myProgressm60").show();
            $("#myBarm60").show();
            $("#60").hide();
            gold -= m60.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            movem60();
        } else {
            console.log("yallo")
        }
    });
    $("#grenade").click(function() {
        if(gold >= grenadeLauncher.cost) {
            $("#myProgressgrenadeLauncher").show();
            $("#myBargrenadeLauncher").show();
            $("#grenade").hide();
            gold -= grenadeLauncher.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            movegrenadeLauncher();
        } else {
            console.log("yallo")
        }
    });
    $("#abrams").click(function() {
        if(gold >= abrams.cost) {
            $("#myProgressabrams").show();
            $("#myBarabrams").show();
            $("#abrams").hide();
            gold -= abrams.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            moveabrams();
        } else {
            console.log("yallo")
        }
    });
    $("#22").click(function() {
        if(gold > f22.cost) {
            $("#myProgressf22").show();
            $("#myBarf22").show();
            $("#22").hide();
            gold -= f22.cost;
            $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
            movef22();
        } else {
            console.log("yallo")
        }
    });

//===============building functions==========\\
    function building() {
        if(enabled = true) {
            $("#myProgress").click(function () {
                $("#myProgress").off();
                move22pistol();
            });
        }else {
            $("#myProgress").off();
        }
    }

    function building22rifle() {
        if(enabled22 = true) {
            $("#myProgress22rifle").click(function () {
                $("#myProgress22rifle").off();
                move22rifle();
            })
        } else {
            $("#myProgress22rifle").off();
        }
    }
    function building9mm() {
        if(enabled9 = true) {
            $("#myProgress9mm").click(function () {
                $("#myProgress9mm").off();
                move9mm();
            })
        } else {
            $("#myProgress9mm").off();
        }
    }
    function building40cal() {
        if(enabled40 = true) {
            $("#myProgress40cal").click(function () {
                $("#myProgress40cal").off();
                move40cal();
            });
        }else {
            $("#myProgress40cal").off();
        }
    }
    function buildingcolt45() {
        if(enabled45 = true) {
            $("#myProgresscolt45").click(function () {
                $("#myProgresscolt45").off();
                movecolt45();
            });
        } else {
            $("#myProgresscolt45").off();
        }
    }
    function buildingak47() {
        if(enabled47 = true) {
            $("#myProgressak47").click(function () {
                $("#myProgressak47").off();
                moveak47();
            });
        }else {
            $("#myProgressak47").off();
        }
    }
    function buildingscar() {
        if(enabledscar = true) {
            $("#myProgressscar").click(function () {
                $("#myProgressscar").off();
                movescar();
            });
        }else {
            $("#myProgressscar").off();
        }
    }
    function buildingm60() {
        if(enabled60 = true) {
            $("#myProgressm60").click(function () {
                $("#myProgressm60").off();
                movem60();
            });
        } else {
            $("#myProgressm60").off();
        }
    }
    function buildinggrenadeLauncher() {
        if(enabled = true) {
            $("#myProgressgrenadeLauncher").click(function () {
                $("#myProgressgrenadeLauncher").off();
                movegrenadeLauncher();
            });
        } else {
            $("#myProgressgrenadeLauncher").off();
        }
    }
    function buildingabrams() {
        if(enabledabrams = true) {
            $("#myProgressabrams").click(function () {
                $("#myProgressabrams").off();
                moveabrams();
            });
        } else {
            $("#myProgressabrams").off();
        }
    }
    function buildingf22() {
        if(enabledf22 = true) {
            $("#myProgressf22").click(function () {
                $("#myProgressf22").off();
                movef22();
            });
        } else {
            $("#myProgressf22").off();
        }
    }
//=========buying manager functions===============\\
    $("#22manage").click(function() {
        if(gold >= twentyTwoPistol.managerCost) {
            manage22();
            enabled = false;
            $("#myProgress").off('click');
            $("#myProgress").off();
            $("#22manage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#22longmanage").click(function() {
        if(gold >= twentyTwoRifle.managerCost) {
            manage22long();
            enabled22 = false;
            $("#myProgress22rifle").off('click');
            $("#myProgress22rifle").off();
            $("#22longmanage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#9manage").click(function() {
        if(gold >= nineMM.managerCost) {
            manage9mm();
            enabled9 = false;
            $("#myProgress9mm").off('click');
            $("#myProgress9mm").off;
            $("#9manage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#40manage").click(function() {
        if(gold >= fortyCal.managerCost) {
            manage40cal();
            enabled40 = false;
            $("#myProgress40cal").off('click');
            $("#myProgress40cal").off();
            $("#40manage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#45manage").click(function() {
        if(gold >= colt45.managerCost) {
            managecolt45();
            enabled45 = false;
            $("#myProgresscolt45").off('click');
            $("#myProgresscolt45").off();
            $("#45manage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#47manage").click(function() {
        if(gold >= ak47.managerCost) {
            manageak47();
            enabled47 = false;
            $("#myProgressak47").off('click');
            $("#myProgressak47").off();
            $("#47manage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#scarmanage").click(function() {
        if(gold >= scar.managerCost) {
            managescar();
            enabledscar = false;
            $("#myProgressscar").off('click');
            $("#myProgressscar").off();
            $("#scarmanage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#60manage").click(function() {
        if(gold >= m60.managerCost) {
            managem60();
            enabled60 =false;
            $("#myProgressm60").off('click');
            $("#myProgressm60").off();
            $("#60manage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#grenademanage").click(function() {
        if(gold >= grenadeLauncher.managerCost) {
            managegrenade();
            enabledgrenade = false;
            $("#myProgressgrenadeLauncher").off('click');
            $("#myProgressgrenadeLauncher").off();
            $("#grenademanage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#abramsmanage").click(function() {
        if(gold >= abrams.managerCost) {
            manageabrams();
            enabledabrams = false;
            $("#myProgressabrams").off('click');
            $("#myProgressabrams").off();
            $("#abramsmanage").hide();
        }else {
            console.log("nope");
        }
    });
    $("#f22manage").click(function() {
        if(gold >= f22.managerCost) {
            managef22();
            enabledf22 = false;
            $("#myProgressf22").off('click');
            $("#myBarf22").off();
            $("#f22manage").hide();
        }else {
            console.log("nope");
        }
    });


    function manage22() {
        console.log("managing");
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, twentyTwoPistol.createTime / twentyTwoPistol.employee);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                move22pistol();
                gold += twentyTwoPistol.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                manage22();
                width = 1;
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function manage22long() {
        console.log("managing");
        let elem = document.getElementById("myBar22rifle");
        let width = 1;
        let id = setInterval(frame, twentyTwoRifle.createTime / twentyTwoPistol.employee);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                move22rifle();
                gold += twentyTwoRifle.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                manage22long();
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function manage9mm() {
        console.log("managing9mm....");
        let elem = document.getElementById("myBar9mm");
        let width = 1;
        let id = setInterval(frame, nineMM.createTime / nineMM.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                move9mm();
                gold += nineMM.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                manage9mm();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function manage40cal() {
        console.log("managing40cal....");
        let elem = document.getElementById("myBar40cal");
        let width = 1;
        let id = setInterval(frame, fortyCal.createTime / fortyCal.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                move40cal();
                gold += fortyCal.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                manage40cal()

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function managecolt45() {
        console.log("managingcolt45....");
        let elem = document.getElementById("myBarcolt45");
        let width = 1;
        let id = setInterval(frame, colt45.createTime / colt45.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                movecolt45();
                gold += colt45.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                managecolt45();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function manageak47() {

        let elem = document.getElementById("myBarak47");
        let width = 1;
        let id = setInterval(frame, ak47.createTime / ak47.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                moveak47();
                gold += ak47.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                manageak47();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function managescar() {

        let elem = document.getElementById("myBarscar");
        let width = 1;
        let id = setInterval(frame, scar.createTime / scar.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                movescar();
                gold += scar.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                managescar();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function managem60() {

        let elem = document.getElementById("myBarm60");
        let width = 1;
        let id = setInterval(frame, m60.createTime / m60.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                movem60();
                gold += m60.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                managem60();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function managegrenade() {

        let elem = document.getElementById("myBargrenade");
        let width = 1;
        let id = setInterval(frame, grenadeLauncher.createTime / grenadeLauncher.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                movegrenadeLauncher();
                gold += grenadeLauncher.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                managegrenade();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function manageabrams() {

        let elem = document.getElementById("myBarabrams");
        let width = 1;
        let id = setInterval(frame, abrams.createTime / abrams.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                moveabrams();
                gold += abrams.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                manageabrams();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function managef22() {

        let elem = document.getElementById("myBarf22");
        let width = 1;
        let id = setInterval(frame, f22.createTime / f22.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                movef22();
                gold += f22.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
                managef22();

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
//=========move functions=======\\
    function move22pistol() {
        console.log("building....");
        $("#myProgress").off();
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, twentyTwoPistol.createTime / twentyTwoPistol.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                building();
                gold += twentyTwoPistol.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    function move22rifle() {
        console.log("buildingrifle....");
        $("#myProgress22rifle").off();
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
        $("#myProgress9mm").off();
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
        $("#myProgress40cal").off();
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
        $("#myProgresscolt45").off();
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
    function moveak47() {
        $("#myProgressak47").off();
        let elem = document.getElementById("myBarak47");
        let width = 1;
        let id = setInterval(frame, ak47.createTime / ak47.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                buildingak47();
                gold += ak47.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function movescar() {
        $("#myProgressscar").off();
        let elem = document.getElementById("myBarscar");
        let width = 1;
        let id = setInterval(frame, scar.createTime / scar.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                buildingscar();
                gold += scar.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function movem60() {
        $("#myProgressm60").off();
        let elem = document.getElementById("myBarm60");
        let width = 1;
        let id = setInterval(frame, m60.createTime / m60.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                buildingm60();
                gold += m60.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function movegrenadeLauncher() {
        $("#myProgressgrenadeLauncher").off();
        let elem = document.getElementById("myBargrenadeLauncher");
        let width = 1;
        let id = setInterval(frame, grenadeLauncher.createTime / grenadeLauncher.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                buildinggrenadeLauncher();
                gold += grenadeLauncher.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function moveabrams() {
        $("#myProgressabrams").off();
        let elem = document.getElementById("myBarabrams");
        let width = 1;
        let id = setInterval(frame, abrams.createTime / abrams.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                buildingabrams();
                gold += abrams.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    function movef22() {
        $("#myProgressf22").off();
        let elem = document.getElementById("myBarf22");
        let width = 1;
        let id = setInterval(frame, f22.createTime / f22.employee);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                buildingf22();
                gold += f22.reward;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                width = 1;

            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
})();