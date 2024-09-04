var menu = document.getElementById('menu');
var btn = document.getElementById('btn');
var svalue = document.getElementById('svalue');
var stxt = document.getElementById('stxt');

var values = [];
btn.onclick = function () {
    var selectedOptions = menu.options;
    var values = [];
    var texts = [];
    for (var i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].selected) {
            values.push(selectedOptions[i].value);
            texts.push(selectedOptions[i].text);
        }
    }
    svalue.innerHTML = '';
    stxt.innerHTML = '';
    svalue.innerHTML = 'Values: <br>' .concat(values.join('<br> '));
    stxt.innerHTML = 'Texts: <br>'.concat(texts.join('<br>'));
}