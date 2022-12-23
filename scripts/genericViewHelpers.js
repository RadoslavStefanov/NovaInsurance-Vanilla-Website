// Generic Presentation logic
    function slideToElement(input)
    {
        let target = document.querySelector(input);
        target.scrollIntoView({behavior: "smooth", block: "start"});
    }

    function keepCallsHidden()
    {
        if (window.screen.width < 770 ) 
        {
            let displayValue = document.getElementById("fc-phone").style.display;
        }
    }

    let mailCloseBtn = null;
    function attachCallBtnListener()
    {
        mailCloseBtn = document.getElementById("dg-chat-widget-icon-minimize");
        mailCloseBtn.addEventListener('click',keepCallsHidden);
    }
// Generic Presentation logic END



// Cookie popUp logic
    /* Javascript to show and hide cookie banner using localstorage */
    /* Shows the Cookie banner */
    function showCookieBanner()
    {
        let cookieBanner = document.getElementById("cb-cookie-banner");
        cookieBanner.style.display = "block";
    }

    /* Hides the Cookie banner and saves the value to localstorage */
    function hideCookieBanner()
    {
        localStorage.setItem("nova_isCookieAccepted", "yes");
        let cookieBanner = document.getElementById("cb-cookie-banner");
        cookieBanner.style.display = "none";
    }

    /* Checks the localstorage and shows Cookie banner based on it. */
    function initializeCookieBanner()
    {
        let isCookieAccepted = localStorage.getItem("nova_isCookieAccepted");
        if(isCookieAccepted === null)
        {
            localStorage.setItem("nova_isCookieAccepted", "no");
            showCookieBanner();
        }
            if(isCookieAccepted === "no"){
            showCookieBanner();
        }
    }

    initializeCookieBanner();

    function clearSiteCookies()
    {
        var cookies = document.cookie.split("; ");
        for (var c = 0; c < cookies.length; c++) {
            var d = window.location.hostname.split(".");
            while (d.length > 0) {
                var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                var p = location.pathname.split('/');
                document.cookie = cookieBase + '/';
                while (p.length > 0) {
                    document.cookie = cookieBase + p.join('/');
                    p.pop();
                };
                d.shift();
            }
        }
        localStorage.removeItem("nova_isCookieAccepted");
    }
// Cookie popUp logic END