
var timeoutId;
var $input = $('input');
var $pre = $('pre');
var url = 'https://crossorigin.me/http://api.cbssports.com/fantasy/players/search?version=3.0&SPORT=football&response_format=json&name=';

$input.on('keyup', function() {
clearTimeout(timeoutId);
timeoutId = setTimeout(function() {

   $.get(url + $input.val())
     .then(show)
     .catch(show);


}, 1000);
});

function show(resp) {
console.log(resp);
$pre.text(JSON.stringify(JSON.parse(resp), null, 2));
}
