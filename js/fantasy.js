(function() {
    'use strict';
    const $labels = $('.labels');
    const $container = $('.bodyContainer');
    const $left = $('#left');
    const $right = $('#right');
    const $buttonlocation = $('.buttonLocation');
    const $player1 = $('#player1');
    const $player2 = $('#player2');
    const $progress = $('<div class="progress"><div class="indeterminate"></div></div>');
    const teamNames = ["Ravens",
    "Bengals",
    "Steelers",
    "Bears",
    "Lions",
    "Packers",
    "Vikings",
    "Texans",
    "Colts",
    "Jaguars",
    "Titans",
    "Falcons",
    "Panthers",
    "Saints",
    "Buccaneers",
    "Bills",
    "Dolphins",
    "Patriots",
    "Jets",
    "Cowboys",
    "Giants",
    "Eagles",
    "Redskins",
    "Broncos",
    "Chiefs",
    "Raiders",
    "Chargers",
    "Cardinals",
    "49ers",
    "Seahawks",
    "Rams",
    "Browns" ];

    function getPhoto1() {
        let $player1 = $('#player1Name');
        let $search = $player1.val();
        let $progress = $('<div class="progress"><div class="indeterminate"></div></div>');
        if ($search.length === 0) {
            Materialize.toast('Need Player 1!', 4000);
            return;
        }

        $buttonlocation.append($progress);



        let $xhr = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.cbssports.com/fantasy/players/search?version=3.0&SPORT=football&response_format=json&name=${$search}`);

        $xhr.done(function(data) {
            if ($xhr.status !== 200) {
                return;
            }
            $progress.remove();
            let photoURL = data.body.players[0].photo;
            let fullName = data.body.players[0].fullname;
            let position = data.body.players[0].position;
            let $pic1 = $('.pic1');
            $pic1.attr("src", photoURL);
            $player1.remove();
            $labels.remove();
            $('.col s5').remove();
            if (teamNames.indexOf(fullName) !== -1) {
              $left.append(`<h5 class="name1">${fullName}   , DST </h5>`);
            } else {
              $left.append(`<h5 class="name1">${fullName}   , ${position}</h5>`);
            }
            $button.remove();

            // let $button2 = $('#button2');
            // $button2.click
        });


    }

    function getPhoto2() {
        let $player2 = $('#player2Name');
        let $search2 = $player2.val();

        if ($search2.length === 0) {
            Materialize.toast('Need player 2!', 4000);
            return;
        }

        let $xhr2 = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.cbssports.com/fantasy/players/search?version=3.0&SPORT=football&response_format=json&name=${$search2}`);

        $xhr2.done(function(data) {
            if ($xhr2.status !== 200) {
                return;
            }
            console.log("P2:", data);
            let photoURL2 = data.body.players[0].photo;
            let fullName2 = data.body.players[0].fullname;
            let position2 = data.body.players[0].position;
            let $pic2 = $('.pic2');
            $pic2.attr("src", photoURL2);
            $player2.remove();

            if (teamNames.indexOf(fullName2) !== -1) {
              $right.append(`<h5 class="name2">${fullName2}   , DST </h5>`);
            } else {
              $right.append(`<h5 class="name2">${fullName2}   , ${position2}</h5>`);
            }
            randomPick()
            otherLinks()
            createReset()

        });
    }


    function randomPick() {
        let pick = Math.random();
        let $name1 = $('.name1').text();
        let $name2 = $('.name2').text();

        if (pick <= .499) {
            $player1.addClass("check");
            $player2.addClass("redX");
            $player1.text('\u2713');
            $player2.text('\u2718');
            $buttonlocation.append(`<div class="col l12 center"><h5>Stop worrying and start ${$name1}!</div>`);
        } else {
            $player2.addClass("check");
            $player1.addClass("redX");
            $player2.text('\u2713');
            $player1.text('\u2718');
            $buttonlocation.append(`<div class="col l12 center"><h5>Stop worrying and start ${$name2}!</div>`);
        }
    }

    function createReset() {
        $buttonlocation.append(`<a class="#1565c0 blue darken-4 btn" id="button2" onClick="window.location.reload()">New decision</a>`);
    }

    function otherLinks() {
        $buttonlocation.append(`<div class="row"><div class="col l12"><h5>For 'expert' predictions try <a href="https://www.fantasypros.com/nfl/start/" target="_blank">here</a> or <a href="https://www.fantasysp.com/start-sit-tool/nfl" target="_blank">here</a>`);
    }



    const $button = $('#getIt');
    $button.click(getPhoto1);
    $button.click(getPhoto2);




})();
