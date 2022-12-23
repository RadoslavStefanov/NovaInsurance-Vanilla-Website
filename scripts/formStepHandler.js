let forms = null;

function readFileSetup()
{forms = document.querySelectorAll(".step");}

function showNextNode(curNode, nextNode)
{
    let curForm = document.getElementById(curNode);
    if(curForm.checkValidity())
    {
        curForm.style.display="none";
        document.getElementById(nextNode).style.display="block";
        slideToElement("#modalHead");
        toastr.success("Преминахте на следващата стъпка.");
    }
    else
    {toastr.error("Моля попълнете всички задължителни полета!")}
}

function showPreviousNode(curNode, previousNode)
{
    document.getElementById(curNode).style.display="none";
    document.getElementById(previousNode).style.display="block";
    toastr.warning("Върнахте 1 стъпка.");
    slideToElement("#modalHead");
}

function buildForm()
{
    let finalForm = document.querySelector(".finalStep");
    if(!finalForm.checkValidity())
    {toastr.error("Моля попълнете всички задължителни полета!"); return;}

    let buildContainer = document.querySelector(".finalStep").querySelector(".resultContainer");

    forms.forEach(formEntry => 
    {
        if(formEntry.classList.contains("finalStep"))
            return;

        buildContainer.innerHTML += formEntry.innerHTML;
        copyOverProps(buildContainer,formEntry);
    });
    document.querySelector(".finalStep").requestSubmit();
}

function copyOverProps(container ,inputForm)
{
    debugger;
    inputForm.querySelectorAll("input").forEach( prop =>
        {
            container.querySelector(`#${prop.id}`).value = prop.value;
        });

    inputForm.querySelectorAll("textfield").forEach( prop =>
        {
            container.querySelector(`#${prop.id}`).value = prop.value;
        });
    
    inputForm.querySelectorAll("select").forEach( prop =>
        {
            container.querySelector(`#${prop.id}`).value = prop.value;
        });
}

readFileSetup();