

    $('#url-switcher').click(function() {
        toggleMenu();
    });

    $('.url').click(function(e) {
        var url = document.location.href;
        
        var dataURL = $(this).data('url');

        if(dataURL) {
           var test =  url+dataURL;
            document.location = test;
        }
        console.log(dataURL);
        console.log(url);
        
    });



    function toggleMenu() {
        var action = document.querySelector('#url-switcher');
        action.classList.toggle('active');

        var uri = window.location.toString();
	        if (uri.indexOf("?") > 0) {
	            var clean_uri = uri.substring(0, uri.indexOf("?"));
	            window.history.replaceState({}, document.title, clean_uri);
	        }


    }

