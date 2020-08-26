$(document).ready(function () {
    [
        './dist/css/modals.min.css',
        './dist/css/iziModal.min.css',
    ].forEach(function (href) {
        var link = document.createElement('link');
        link.href = href;
        link.rel = "stylesheet";
        link.type = "text/css";
        document.head.appendChild(link);
    });

    $.when(
        $.getScript("./dist/js/iziModal.min.js", function () {
            console.log("Chumney & Associates: Modal");
        }),
        $.getScript("./dist/js/js.cookie.min.js", function () {
            console.log("Chumney & Associates: Cookies Loaded");
        }),
        $.getScript("./dist/js/exit-intent.js", function () {
            console.log("Chumney & Associates: Exit Intent");
        }),
        $.getScript("./dist/js/ScratchIt.min.js", function () {
            console.log("Chumney & Associates: Scratch-off");
        }),

    ).then(function () {


        if (window.location.search.indexOf('modal=exit') > -1) {

            $.exitIntent('enable');
            $(document).bind('exitintent', function () {
                buildExitModal();
            });
            console.log('Modals: Exit')

        } else if (window.location.search.indexOf('modal=entrance') > -1) {
            buildEntranceModal();
            console.log('Modals: Entrance')

        } else if (window.location.search.indexOf('modal=scratch') > -1) {
            buildScratchModal();
            console.log('Modals: Scratch-off')

        } else if (window.location.search.indexOf('modal=video') > -1) {
            buildVideoModal();
            console.log('Modals: Video')

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
            var content = '<a href="#" class="button insertion">Insertion Button</a></li>';
            $(this).append(createButton);
            createButton.html(content)
        });

    }

    // Function that creates modal
    function buildExitModal() {
        var modal = `
        <div id="ca-modal" class="iziModal">
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
                    <button type="submit" id="ca-submit" name="submit">Get More Information</button>
                </div>
            </form>
        </div>`;

        $('body').append(modal);

        $("#ca-modal").iziModal({
            radius: 5,
            padding: 20,
            closeButton: true,
            title: 'Chumney & Associates: Exit Modal',
            headerColor: '#EB2D1C',
            autoOpen: 1, 
            /* bodyOverflow: Forcing overflow hidden in the document when opening the modal, closing the modal, overflow will be restored. */
        });
    }
    // Function that creates modal
    function buildEntranceModal() {
        var modal = `
        <div id="ca-modal" class="iziModal">
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
                    <button type="submit" id="ca-submit" name="submit">Get More Information</button>
                </div>
            </form>
        </div>`;

        $('body').append(modal);

        $("#ca-modal").iziModal({
            radius: 5,
            padding: 20,
            closeButton: true,
            title: 'Chumney & Associates: Entrance Modal',
            headerColor: '#EB2D1C',
            autoOpen: 1, 
            /* bodyOverflow: Forcing overflow hidden in the document when opening the modal, closing the modal, overflow will be restored. */
        });
    }

    // Function that creates modal
    function buildVideoModal() {
        var modal = `

        <div id="ca-modal-video" class="iziModal">
            <div id="video">
                <video controls autoplay="autoplay" playsinline="playsinline">
                    <source src="./dist/video/video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>    

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
                    <button type="submit" id="ca-submit" name="submit">Get More Information</button>
                </div>
            </form>
        </div>`;

        $('body').append(modal);

        $("#ca-modal-video").iziModal({
            radius: 5,
            padding: 20,
            closeButton: true,
            title: 'Chumney & Associates: Video Modal',
            headerColor: '#EB2D1C',
            autoOpen: 1, 
            /* bodyOverflow: Forcing overflow hidden in the document when opening the modal, closing the modal, overflow will be restored. */
        });
    }

    // Function that creates modal
    function buildScratchModal() {
        
        var resizedContainer = 500;
        if ($(window).width() < 600) {
            resizedContainer = 320;
        }

        var modal = `

        <div id="ca-modal" class="iziModal">
            <div id="cascratch">
                <img src="./dist/images/scratchoff-bottom.jpg" />
            </div>
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
                    <button type="submit" id="ca-submit" name="submit">Get More Information</button>
                </div>
            </form>
        </div>`;

        $('body').append(modal);

      



        $("#ca-modal").iziModal({
            radius: 5,
            padding: 20,
            closeButton: true,
            title: 'Chumney & Associates: Scratch-off Modal',
            headerColor: '#EB2D1C',
            autoOpen: 1,
            /* bodyOverflow: Forcing overflow hidden in the document when opening the modal, closing the modal, overflow will be restored. */
        });



  var containerEl = document.getElementById('cascratch'),
     overlayImgUrl = './dist/images/scratchoff-top.jpg',
     brushImgUrl = './dist/images/brush1.png',
      revealPercent = 50;

  // event handler that fades out the overlay once 50% of it has been removed
  function onReveal() {
      containerEl.className += ' revealed';

      // NOTE: really weird workaround to force Edge 16 to actually detect the css class name addition and render the fade out transition. getElementById doesn't work, it actually needs to be getElementsByTagName. Any style could be changed (like fontSize) to trigger the update
      if (window.navigator.userAgent.indexOf("Edge") > -1) {
          document.getElementsByTagName('canvas')[0].style.width = '100%';
      }
  }

  if (ScratchIt.isSupported()) {
      ScratchIt(containerEl, overlayImgUrl, brushImgUrl, onReveal, revealPercent);
  }







    }





    // Function that creates program specific buttons
    function buttonsPrograms() {

        function createButton() {
            // loop through button containers and append button
            $('.button-block').each(function () {
                var createButton = $('<li>').attr('class', 'button-item');
                var content = '<a href="#" class="button exclusive">Exclusive Offer</a></li>';
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
        }


    }











}); //end document ready