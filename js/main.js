$(document).ready(function(){
    ShowTitle();
    ResizeSolcialIcons();
        
    $(function () {
        $('[data-toggle="popover"]').popover()
      })    
});

$(window).on('resize', function() {
    ResizeSolcialIcons();
})

function ShowTitle()
{
    $("#cartitle").show("slow");
}

function ResizeSolcialIcons(){
    if($(window).width() < 600) {
        $('#lgFace').removeClass('zmdi-hc-3x');
        $('#lgFace').addClass('zmdi-hc-2x');

        $('#lgWhats').removeClass('zmdi-hc-3x');
        $('#lgWhats').addClass('zmdi-hc-2x');

        $('#mainLogo').removeClass('fa-2x');
        $('#mainLogo').addClass('fa-1x');
    }
    else{
        $('#lgFace').removeClass('zmdi-hc-2x');
        $('#lgFace').addClass('zmdi-hc-3x');

        $('#lgWhats').removeClass('zmdi-hc-2x');
        $('#lgWhats').addClass('zmdi-hc-3x');

        $('#mainLogo').removeClass('fa-1x');
        $('#mainLogo').addClass('fa-2x');
    }
}