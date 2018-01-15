$(document).ready(function(){
    //Testa se navbar está collapsed ou normal ao evento click
    $('#company-about-button, #navbar-company-about').click(function () {
        var id = this.id;

        if($('.navbar-toggler').css('display') == 'block'){
            $('html, body').animate({
                scrollTop: $('#company-about-section').offset().top - 20
            }, 'slow', function () {
                if(id == "navbar-company-about") {
                    $('.navbar-collapse').collapse('hide');
                }
            });
        }
        else {
            document.getElementById("company-about-section").scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
})