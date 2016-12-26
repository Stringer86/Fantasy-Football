(function() {
    'use strict';

    const $labels = $('.labels');
    const $left = $('#left');
    const $right = $('#right');
    const $buttonlocation = $('.buttonLocation');
    const $progress = $('<div class="progress"><div class="indeterminate"></div></div>');

    function getResults() {
        let $team1 = $('#team1');

        let search = $team1.val();

        if (search.length === 0) {
            Materialize.toast('Need Team 1!', 4000);
            return;
        }
        $buttonlocation.append($progress);

        let $xhr = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.cbssports.com/fantasy/players/search?version=3.0&SPORT=football&response_format=json&name=${search}`);

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
            $team1.remove();
            $labels.remove();
            $('.col s5').remove();
            $left.append(`<h5 class="name1">${fullName}</h5>`);
            $button.remove();

            return;
        })
        .then(() => {
          let $team2 = $('#team2');

          let search2 = $team2.val();

          if (search2.length === 0) {
              Materialize.toast('Need Team 2!', 4000);
              return;
          }

          let $xhr2 = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.cbssports.com/fantasy/players/search?version=3.0&SPORT=football&response_format=json&name=${search2}`);

          $xhr2.done(function(data) {
              if ($xhr2.status !== 200) {
                  return;
              }

              let photoURL2 = data.body.players[0].photo;

              let fullName2 = data.body.players[0].fullname;

              let position2 = data.body.players[0].position;

              let $pic2 = $('.pic2');

              $pic2.attr("src", photoURL2);
              $team2.remove();
              $right.append(`<h5 class="name2">${fullName2}</h5>`);
              randomPick();
              createReset();
        })
    });

}

    function randomPick() {
        let pick = Math.random();

        let $team1 = $('#player1');

        let $team2 = $('#player2');

        let name1 = $('.name1').text();

        let name2 = $('.name2').text();

        if (pick <= .5) {
            $team1.addClass("check");
            $team2.addClass("redX");
            $team1.text('\u2713');
            $team2.text('\u2718');
            $buttonlocation.append(`<div class="col l12 center"><h5>Stop worrying and pick the ${name1}!</div>`);
        } else {
            let name1 = $('.name1').html();

            let name2 = $('.name2').html();

            $team2.addClass("check");
            $team1.addClass("redX");
            $team2.text('\u2713');
            $team1.text('\u2718');
            $buttonlocation.append(`<div class="col l12 center"><h5>Stop worrying and pick the ${name2}!</div>`);
        }
    }

    function createReset() {
        $buttonlocation.append(`<a class="#1565c0 blue darken-4 btn" id="button2" onClick="window.location.reload()">New decision</a>`);
    }

    const $button = $('#getIt');
    $button.click(getResults);
})();
