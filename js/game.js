"use strict";
(function () {

    const $ = require("jquery");

    let gold = 0;
    let builds = "";
    let levelText = "";

    class Weapon {
        constructor(name, createTime, reward, cost, employee, upgradeCost, managerCost, employeeButtonId, buyButtonId, managerButtonId, progressId, barId, enabled) {
            this.name = name;
            this.createTime = createTime;
            this.reward = reward;
            this.cost = cost;
            this.employee = employee;
            this.upgradeCost = upgradeCost;
            this.managerCost = managerCost;
            this.employeeButton = document.getElementById(employeeButtonId);
            this.buyButton = document.getElementById(buyButtonId);
            this.managerButton = document.getElementById(managerButtonId);
            this.progress = $(progressId);
            this.bar = document.getElementById(barId);
            this.enabled = enabled;

            this.buyEmployee = this.buyEmployee.bind(this);
            this.buyManager = this.buyManager.bind(this);
            this.buyWeapon = this.buyWeapon.bind(this);
            this.building = this.building.bind(this);
            this.manage = this.manage.bind(this);
            this.move = this.move.bind(this);
        }

        buyEmployee() {
            console.log('in buyEmployee function');
            if (gold >= this.upgradeCost) {
                this.employeeButton.style.display = 'none';
                gold -= this.upgradeCost;
                $("#gold").html("Gold: " + gold);
                this.employee++;
                this.bar.innerHTML = this.employee;
            }
        }
        buyManager() {
            console.log('in buyManager function');
            if (gold >= this.managerCost) {
                this.manage();
                this.enabled = false;
                this.progress.off();
                gold -= this.managerCost;
                this.managerButton.style.display = 'none';
            } else {
                console.log('nope');
            }
        }
        buyWeapon() {
            console.log('in buyWeapon function');
            if (gold >= this.cost) {
                this.progress.show();
                this.bar.style.display = 'block';
                this.buyButton.style.display = 'none';
                gold -= this.cost;
                $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i>" + gold);
                this.move();
            } else {
                console.log('yallo');
            }
        }
        building() {
            console.log('in building function');
            if (this.enabled) {
                this.progress.click(() => {
                    this.progress.off();
                    this.move();
                });
            } else {
                this.progress.off();
            }
        }
        manage() {
            let frame = () => {
                if (width >= 100) {
                    clearInterval(id);
                    this.move();
                    gold += this.reward;
                    $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                    this.manage();
                    width = 1;
                } else {
                    width++;
                    this.bar.style.width = width + '%';
                }
            };

            console.log('in manage function');
            let width = 1;
            let id = setInterval(frame, this.createTime / this.employee);
        }
        move() {
            let frame = () => {
                if (width >= 100) {
                    clearInterval(id);
                    this.building();
                    gold += this.reward;
                    $("#gold").html("<i class=\"fas fa-money-bill-wave\">=</i> " + gold);
                    width = 1;
                } else {
                    width++;
                    this.bar.style.width = width + '%';
                }
            };

            console.log("in move function");
            this.progress.off();
            let width = 1;
            let id = setInterval(frame, this.createTime / this.employee);
        }
    }

    const weapons = [
        {
            weapon: new Weapon('twentyTwoPistol', 30, 1000, 0, 1, 500, 10000, '22employ', null, '22manage', '#myProgress', 'myBar', true),
        },
        {
            weapon: new Weapon('twentyTwoRifle', 60, 50, 220, 1, 100, 15000, '22longemploy', '22', '22longmanage', '#myProgress22rifle', 'myBar22rifle', true),
        },
    ];

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
        weapons[0].weapon.move();
        $( "#ready-screen" ).append(levelText);
        gold = 5;
        builds = 0;
        $("#gold").append(gold);
        $("#builds").append(builds);
    }

    weapons.forEach((weapons) => {
        // Buy Employee
        weapons.weapon.employeeButton.addEventListener('click', () => {
            weapons.weapon.buyEmployee();
        });
        // Buy Weapon, except for the pistol
        if (weapons.weapon.name !== 'twentyTwoPistol') {
            weapons.weapon.buyButton.addEventListener('click', () => {
                weapons.weapon.buyWeapon();
            });
        }
        // Buy Manager
        weapons.weapon.managerButton.addEventListener('click', () => {
            weapons.weapon.buyManager();
        })
    });

})();