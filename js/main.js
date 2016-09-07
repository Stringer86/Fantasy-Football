(function() {
  'use strict';
  const $labels = $('.labels');
  const $container = $('.bodyContainer');
  const $left = $('#left');
  const $right = $('#right');

  function getPhoto1() {
    let $player1 = $('#player1Name');
    let $search = $player1.val();



    if ($search.length === 0) {
       Materialize.toast('Need Player 1!', 4000);
       return;
    }

    let $xhr = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.cbssports.com/fantasy/players/search?version=3.0&SPORT=football&response_format=json&name=${$search}`);

    $xhr.done(function(data) {
      if ($xhr.status !== 200) {
          return;
      }

      let photoURL = data.body.players[0].photo;
      let fullName = data.body.players[0].fullname;
      let position = data.body.players[0].position;
      let $pic1 = $('.pic1');
      $pic1.attr("src", photoURL);
      $player1.remove();
      $labels.remove();
      $('.col s5').remove();
      $left.append(`<h5 class="name1">${fullName}   , ${position}</h5>`);
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

      let photoURL2 = data.body.players[0].photo;
      console.log(photoURL2);
      let fullName2 = data.body.players[0].fullname;
      let position2 = data.body.players[0].position;
      let $pic2 = $('.pic2');
      $pic2.attr("src", photoURL2);
      $player2.remove();
      $right.append(`<h5 class="name2">${fullName2} , ${position2}</h5>`);
      setTimeout(randomPick(), 200); // setTimeout to solve race issue
      setTimeout(otherLinks(), 250);
      setTimeout(createReset(), 300);

  });
}


function randomPick() {
  let pick = Math.random();
  let $greenCheck = $('<span class="check">&#10004;</span>');
  let $redX = $('<span class="redX">&#10008;</span>');
  let $name1 = $('.name1').text();
  let $name2 = $('.name2').text();
  console.log($name1);
  if (pick <= .499) {
    $left.append($greenCheck);
    $right.append($redX);
    $container.append(`<div class="row"><div class="col l12 center"><h5>Stop worrying and start ${$name1}!</div></div>`);
  } else {
    $right.append($greenCheck);
    $left.append($redX);
    $container.append(`<div class="col l12 center"><h5>Stop worrying and start ${$name2}!</div>`);
  }
}

function createReset() {
  $container.append(`<div class="row"><div class="col l6 offset-l5"><a class="#1565c0 blue darken-3 btn" id="button2" onClick="window.location.reload()">New decision</a></div></div>`);
}

function otherLinks() {
  $container.append(`<div class="row"><div class="col l12 center"><h5>For more "scientific" results try <a href="https://www.fantasypros.com/nfl/start/">here</a> or <a href="https://www.fantasysp.com/start-sit-tool/nfl">here</a>`);
}



  const $button = $('#getIt');
  $button.click(getPhoto1);
  $button.click(getPhoto2);






})();
