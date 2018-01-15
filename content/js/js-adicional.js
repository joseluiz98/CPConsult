$(document).ready(function(){
    //Fecha navbar ao clicar em seus links, menos o "A Empresa"
    $(document).on('click','.navbar-collapse', function(e) {
        if($(e.target).is('a')) {
            if(event.target.id != "navbar-company-about"){
                $(this).collapse('hide');
            }
        }
    });
    
    //Testa se navbar está collapsed ou normal ao evento click
    $('#company-about-button, #navbar-company-about').click(function () {
        var id = this.id;
        //Se é mobile, fecha o menu após clicar em opção "A Empresa"
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