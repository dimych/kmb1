for (i = 0; i < 3; i++) {
    $('.MP3-lease-basket').first().clone().appendTo('.license .container .row');
};

var data1 = {
    'image': 'assets/images/cart-img/beat1.png',
    'mood': 'Trap'
};
var data2 = {
    'image': 'assets/images/cart-img/beat2.png',
    'mood': 'RnB'
};
var data3 = {
    'image': 'assets/images/cart-img/beat3.png',
    'mood': 'Smooth'
};
var template = $.templates('#theTmpl');
var $html1 = template.render(data1);
$('.examples .row').append($html1);
var $html2 = template.render(data2);
$('.examples .row').append($html2);
var $html3 = template.render(data3);
$('.examples .row').append($html3);