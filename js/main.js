$(document).ready(function(){
    ShowTitle();
    $(function () {
        $('[data-toggle="popover"]').popover()
      })    
});

$(window).on('resize', function() {
    if($(window).width() < 600) {
        $('#lgFace').removeClass('zmdi-hc-3x');
        $('#lgFace').addClass('zmdi-hc-2x');

        $('#lgWhats').removeClass('zmdi-hc-3x');
        $('#lgWhats').addClass('zmdi-hc-2x');
    }
    else{
        $('#lgFace').removeClass('zmdi-hc-2x');
        $('#lgFace').addClass('zmdi-hc-3x');

        $('#lgWhats').removeClass('zmdi-hc-2x');
        $('#lgWhats').addClass('zmdi-hc-3x');
    }
})

function ShowTitle()
{
    $(".carousel-title").show(5000);
}