$(document).ready(function () {
[
    './dist/css/button-insert.css',
    './dist/css/iziModal.min.css'

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
    
  
    if (window.location.search.indexOf('button=exclusive') > -1) {
        buttonsPrograms();
        buildEntranceModal();
        console.log('Buttons: Program Specific Buttons')

    } else if (window.location.search.indexOf('button=hover') > -1) {
        buttonsPrograms();
        buttonsHover();
        buildEntranceModal();
        console.log('Buttons: Hover Buttons')
    } else if (window.location.search.indexOf('button=insertion') > -1) {
        buttonsPrograms();
        buttonsInsertion();
        buildEntranceModal();
        console.log('Buttons: Insertion Buttons')

    }
    else {
        buttonsPrograms();
        buildEntranceModal();
        console.log('Location search is not working.')

    }







}); // end callback (then)




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




// Function that creates insertion buttons
function buttonsInsertion() {
    $('.button-block').each(function () {
        var createButton = $('<li>').attr('class', 'button-item');
        var content = '<a href="#" data-izimodal-open="#insert-modal" class="button insertion">Insertion Button</a></li>';
        $(this).append(createButton);
        createButton.html(content)
    });

}

// Function that creates "hover" buttons
function buttonsHover() {

}

// Function that creates program specific buttons
function buttonsPrograms() {

    function createButton() {
        // loop through button containers and append button
        $('.button-block').each(function () {
            var createButton = $('<li>').attr('class', 'button-item');
            var content = '<a href="#" data-izimodal-open="#insert-modal" class="button exclusive">Exclusive Offer</a></li>';
            $(this).append(createButton);
            createButton.html(content)
        });

    };
 
    var caCampaign = getUrlParameter('caoffer');
    console.log(caCampaign);

    if (caCampaign) {
        Cookies.set('cacookie', caCampaign, {
            expires: 1
        })
        console.log(caCampaign + ' ' + 'has been set');
    }

    if (Cookies.get('cacookie')) {
        createButton();
        console.log('created')
    }


}



    function buildEntranceModal() {
        var modal = `
        <div id="insert-modal" class="iziModal">
            <img src="./dist/images/modal-entrance.jpg" alt="$505 in trade assistance">

            <form role="form" method="post">
                <div class="insp-row">
                    <label for="firstname"> Full Name</label>
                    <input type="text" name="fullname" id="fullname" required placeholder="Full Name">
                </div>

                <div class="insp-row">
                    <label for="email"> Email Address</label>
                    <input type="text" name="email" id="email" required placeholder="Email Address">
                </div>
                <div class="insp-row">
                    <label for="phone"> Phone Number</label>
                    <input type="text" name="phone" id="phone" required placeholder="Phone Numbers">
                </div>
                <div class="insp-row">
                    <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Your Question">
                    </textarea>
                </div>

                <div class="insp-row">
                    <button type="submit" id="ca-submit" name="submit">Yes! Save Me Money!</button>
                </div>
            </form>
        </div>`;

        $('body').append(modal);

        $("#insert-modal").iziModal({
            radius: 5,
            padding: 20,
            closeButton: true,
            title: 'Chumney & Associates: Button Modal',
            headerColor: '#EB2D1C',
            autoOpen: 0, 
            /* bodyOverflow: Forcing overflow hidden in the document when opening the modal, closing the modal, overflow will be restored. */
        });
    }







}); //end document ready