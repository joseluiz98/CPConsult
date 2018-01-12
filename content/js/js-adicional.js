$(document).ready(function(){
    // Scripts para scroll down de página quando clica nos botões
    document.getElementById("company-about-button").addEventListener('click',function ()
    {
        scrollToItem("company-about-section");
    });

    document.getElementById("navbar-company-about").addEventListener('click',function ()
    {
        scrollToItem("company-about-section");
    });

    // Scripts para scroll down de página quando clica nos links da navbar
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });

    document.getElementById("contact-us").onclick = function () {
        location.href = "contato.html";
    };

    //Funções
    // Função Scroll down suave para botões
    function scrollToItem(itemID) {
        document.getElementById(itemID).scrollIntoView({ 
            behavior: 'smooth' 
          });
    }
})