$(document).ready(function () {
[
    './dist/css/button-insert.min.css',
].forEach(function (href) {
    var link = document.createElement('link');
    link.href = href;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
});

$.when(
    $.getScript("./dist/js/iziModal.min.js", function () {
        console.log("Chumney & Associates: Exclusive Offer Button");
    }),
    $.getScript("./dist/js/js.cookie.min.js", function () {
        console.log("Chumney & Associates: Cookies Loaded");
    }),

).then(function () {
    
    var caCampaign = getUrlParameter('caoffer');
    console.log(caCampaign);

    if(caCampaign) {
        Cookies.set('cacookie', caCampaign, {
            expires: 1
        })
        console.log(caCampaign + ' ' + 'has been set');

    }
    
    if (Cookies.get('cacookie')) {
        createButton();

    }







});














// function to get url parameters
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};


function createButton() {

    // loop through button containers and append button
    $('.button-block').each(function () {
        var createButton = $('<li>').attr('class', 'button-item');

        var content = '<a href="#" class="button exclusive">Exclusive Back to School Offer</a></li>';

        $(this).append(createButton);
        createButton.html(content)





    });























};
});