$(document).ready(function() {
  'use strict';

  var data = {
    Ravens: null,
    Bengals: null,
    Steelers: null,
    Bears: null,
    Lions: null,
    Packers: null,
    Vikings: null,
    Texans: null,
    Colts: null,
    Jaguars: null,
    Titans: null,
    Falcons: null,
    Panthers: null,
    Saints: null,
    Buccaneers: null,
    Bills: null,
    Dolphins: null,
    Patriots: null,
    Jets: null,
    Cowboys: null,
    Giants: null,
    Eagles: null,
    Redskins: null,
    Broncos: null,
    Chiefs: null,
    Raiders: null,
    Chargers: null,
    Cardinals: null,
    '49ers': null,
    Seahawks: null,
    Rams: null,
    Browns: null
  };
  $('input.autocomplete').autocomplete({
    data: data
  });
});
