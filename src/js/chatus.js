/* Louis Stephens
 * 01/28/19
 *
 */ 

[
    'https://theautohost.com/projects/chatus/dist/css/iziModal.min.css',
    'http://192.168.12.3:8182/internal-projects/sales-site/dist/css/chat.css'
].forEach(function (href) {
    var link = document.createElement('link');
    link.href = href;
    link.rel = "stylesheet";
    link.type = "text/css";
    document.head.appendChild(link);
});

$.when(
    $.getScript("https://theautohost.com/projects/chatus/dist/js/iziModal.min.js", function () {
        console.log("Chumney & Associates Chat: General.");
    }),

).then(function () {
    chatGeneral();
});


function chatGeneral() {
    var createDiv = $('<div>').attr('id', 'chatterspot-chatus');
    
    $('body').append(createDiv);


    var close = '<button class="close-bubble fadeIn">X</button>';

    var content = `
        <button id="chatus" class="chatus trigger" data-izimodal-open="#chatterspot-general">
            <img src="./dist/images/chatterspot.png" style="width: 30px;" />
        </button>
            <div class="catooltip fadeIn">
                <div class="header"><img src="./dist/images/avatar.png" />
                    <ul>
                        <li class="help-name">Ashley</li>
                        <li class ="help-dealer">ABC Motors</li>
                    </ul>
                </div>
                <div class="message">
                    <p class="ca-message-text"></p>
                </div>
            </div>`;
    createDiv.html(content);
    createDiv.prepend(close);

   var modal = `
        <div id="chatterspot-general" class="iziModal">
            <form role="form" method="post">
                <div class="insp-row">
                    <label for="firstname" class="ca-required"> Full Name</label>
                    <input type="text" name="fullname" id="cafullname" required placeholder="Full Name">
                </div>

                <div class="insp-row">
                    <label for="phone" class="ca-required">Cell Phone</label>
                    <input type="text" name="phone" id="caphone" required placeholder="Cell Phone">
                </div>
                <div class="insp-row">
                    <label for="vehicle">Which vehicle are you interested in?</label>
                    <input type="text" name="vehicle" id="vehicle" placeholder="Which vehicle are you interested in?">
                </div>

                <div class="insp-row">
                    <button type="submit" id="ca-submit" name="submit">Submit</button>
                </div>
            </form>
        </div>
    `;

   $('body').append(modal);





    $('.close-bubble').click(function () {
        $('.catooltip').removeClass('fadeIn').delay(20, function() {
            $(this).addClass('fadeOut')
        })
        $('.close-bubble').removeClass('fadeIn').delay(20, function () {
            $(this).addClass('fadeOut')
        })



    });


    var messageArray = [
        "Have a question? Shoot me a text now!",
        "I'm available to answer your texts!",
        "Text me your questions! I'm here to help!"
    ];
    var randomNumber = Math.floor(Math.random() * messageArray.length);

    $('.ca-message-text').html(messageArray[randomNumber]);

    $('#chatus').click(function() {
        console.log('eheh')
    });

    $("#chatterspot-general").iziModal({
            title: 'Text Us',
            headerColor: '#EB2D1C',
            closeButton: true,
            iframe: false,
            //iframeHeight: 703,
            zindex: 99999,
            //iframeURL: 'https://app.chatterspot.com/images/landingpage/static/enroll-rogerdean-int.asp'
        });




}










$(".srpVehicle").each(function() {
        //var test = $(this).find('.priceBlockItem:last-child'); //appends inside of li
        var buttons = $(this).find('ul.priceBlock');
        var title = $(this).find('.vehicleTitle').html();
        //console.log(title);
        var createButton = $('<li>').attr('class', 'priceBlockItem ca-btn-chat')
        var appendContent = $(buttons).append(createButton);
        var content = '<a href="#" class="ca" data-izimodal-iframeurl="http://app.chatterspot.com/images/landingpage/static/enroll-rogerdean-int.asp" data-izimodal-open="#chatterspot-vehicle">Text Us Now!</a>';
        createButton.html(content);

    });



    $(".srpVehicle").each(function () {
        //var test = $(this).find('.priceBlockItem:last-child'); //appends inside of li
        var buttons = $(this).find('ul.priceBlockResponsiveSrpMobile');
        var title = $(this).find('.vehicleTitle').html();
        //console.log(title);
        var createButton = $('<li>').attr('class', 'priceBlockItem ca-btn-chat')
        var appendContent = $(buttons).append(createButton);
        var content = '<a href="#" class="ca" data-izimodal-iframeurl="http://app.chatterspot.com/images/landingpage/static/enroll-rogerdean-int.asp" data-izimodal-open="#chatterspot-vehicle">Text Us Now!</a>';
        createButton.html(content);

    });
