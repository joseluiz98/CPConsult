$(document).ready(function(){
    // Scripts para scroll down de página quando clica nos botões
    document.getElementById("company-about-button").addEventListener('click',function ()
    {
        scrollToItem("company-about-section");
    });

    document.getElementById("navbar-company-about").addEventListener('click',function ()
    {
        if(window.location.pathname == "/CPConsult/index.html" || window.location.pathname == "/CPConsult/")
        {
            scrollToItem("company-about-section");
        }
        else
        {
            window.location.href = "/CPConsult/index.html";
        }
    });

    $("#btn-portfolio, #btn-see-portfolio").click(function() { 
        location.href = "portifolio.html";
    }); 

    /*document.getElementById("btn-portfolio").onclick = function () {
        location.href = "portifolio.html";
    };*/

    //Funções
    // Função Scroll down suave para botões
    function scrollToItem(itemID) {
        document.getElementById(itemID).scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
})