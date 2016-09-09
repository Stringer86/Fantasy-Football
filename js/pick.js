(function() {
    'use strict';
    const $labels = $('.labels');
    const $container = $('.bodyContainer');
    const $left = $('#left');
    const $right = $('#right');
    const $buttonlocation = $('.buttonLocation');
    const $progress = $('<div class="progress"><div class="indeterminate"></div></div>');

    function getPhoto1() {
        let $player1 = $('#player1Name');
        let $search = $player1.val();



        if ($search.length === 0) {
            Materialize.toast('Need Team 1!', 4000);
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
            $left.append(`<h5 class="name1">${fullName}</h5>`);
            $button.remove();
        });


    }

    function getPhoto2() {
        let $player2 = $('#player2Name');
        let $search2 = $player2.val();

        if ($search2.length === 0) {
            Materialize.toast('Need Team 2!', 4000);
            return;
        }

        let $xhr2 = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.cbssports.com/fantasy/players/search?version=3.0&SPORT=football&response_format=json&name=${$search2}`);

        $xhr2.done(function(data) {
            if ($xhr2.status !== 200) {
                return;
            }

            let photoURL2 = data.body.players[0].photo;
            console.log(photoURL2);
            let fullName2 = data.body.players[0].fullname;
            let position2 = data.body.players[0].position;
            let $pic2 = $('.pic2');
            $pic2.attr("src", photoURL2);
            $player2.remove();
            $right.append(`<h5 class="name2">${fullName2}</h5>`);
            randomPick();
            createReset();

        });
    }


    function randomPick() {
        let pick = Math.random();
        let $player1 = $('#player1');
        let $player2 = $('#player2');
        let $name1 = $('.name1').text();
        let $name2 = $('.name2').text();

        if (pick <= .499) {
            $player1.addClass("check");
            $player2.addClass("redX");
            $player1.text('\u2713');
            $player2.text('\u2718');
            $buttonlocation.append(`<div class="col l12 center"><h5>Stop worrying and pick the ${$name1}!</div>`);
        } else {
            let $name1 = $('.name1').html();
            let $name2 = $('.name2').html();
            $player2.addClass("check");
            $player1.addClass("redX");
            $player2.text('\u2713');
            $player1.text('\u2718');
            $buttonlocation.append(`<div class="col l12 center"><h5>Stop worrying and pick the ${$name2}!</div>`);
        }
    }

    function createReset() {
        $buttonlocation.append(`<a class="#1565c0 blue darken-4 btn" id="button2" onClick="window.location.reload()">New decision</a>`);
    }

    const $button = $('#getIt');
    $button.click(getPhoto1);
    $button.click(getPhoto2);
})();
