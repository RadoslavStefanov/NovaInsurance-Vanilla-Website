function init()
{
    if(isError())
        return;
        
    addEventHandlers();
    hideAll();

    let selectedTab = getSelectedTab();
    switch(selectedTab)
    {
        case "insurance-tab": displayInsurance();
            break;
        case "others-tab": displayOthers();
            break;
        case "services-tab": displayServices();
            break;
        default:
            break;
    }
}


function displayInsurance()
{
    let cards = document.querySelectorAll(".insurance-tab");
    cards.forEach(x=>x.style.display = "block");
}

function displayOthers()
{
    let cards = document.querySelectorAll(".others-tab");
    cards.forEach(x=>x.style.display = "block");
}

function displayServices()
{
    let cards = document.querySelectorAll(".services-tab");
    cards.forEach(x=>x.style.display = "block");
}

function hideAll()
{
    let cards = document.querySelectorAll(".insurance-tab, .others-tab, .services-tab");
    cards.forEach(x=>x.style.display = "none");
}

function addEventHandlers()
{
    let navButtons = document.querySelectorAll("#categories button");
    navButtons.forEach(x=>x.addEventListener("click",init));
}

function isError()
{
    let navButtons = document.querySelectorAll("#categories button");
    if(navButtons.length<2)
        return true;
    return false;
}

function getSelectedTab()
{
    let selectedButton = document.querySelector("#categories .active");
    return selectedButton.getAttribute('id');
}

window.onload = init();