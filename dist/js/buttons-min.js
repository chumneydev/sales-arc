$(document).ready(function(){["./dist/css/button-insert.css"].forEach(function(o){var t=document.createElement("link");t.href=o,t.rel="stylesheet",t.type="text/css",document.head.appendChild(t)}),$.when($.getScript("./dist/js/iziModal.min.js",function(){console.log("Chumney & Associates: Exclusive Offer Button")}),$.getScript("./dist/js/js.cookie.min.js",function(){console.log("Chumney & Associates: Cookies Loaded")})).then(function(){window.location.search.indexOf("caoffer=exclusive")>-1?(t(),console.log("Buttons: Program Specific Buttons")):window.location.search.indexOf("button=hover")>-1?(t(),console.log("Buttons: Hover Buttons")):window.location.search.indexOf("button=insertion")>-1?(t(),$(".button-block").each(function(){var o=$("<li>").attr("class","button-item");$(this).append(o),o.html('<a href="#" class="button insertion">Insertion Button</a></li>')}),console.log("Buttons: Insertion Buttons")):(t(),console.log("Location search is not working."))});var o=function(o){var t,e,n=window.location.search.substring(1).split("&");for(e=0;e<n.length;e++)if((t=n[e].split("="))[0]===o)return void 0===t[1]||decodeURIComponent(t[1])};function t(){var t=o("caoffer");console.log(t),t&&(Cookies.set("cacookie",t,{expires:1}),console.log(t+" has been set")),Cookies.get("cacookie")&&$(".button-block").each(function(){var o=$("<li>").attr("class","button-item");$(this).append(o),o.html('<a href="#" class="button exclusive">Exclusive Offer</a></li>')})}});