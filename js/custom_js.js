var curr = 0;
var past = 0;


/* individual speaker JS */

function loadSpeaker(id) {
    if(curr !== 0){
        past = curr;
    }

    if(curr !== id){

        curr = id;
        removeCurrent();


        $('#commonInfo').addClass('animated speakerHidden bounceOutLeft');
        $("#s" + id).css({"border-top": "3px solid #FFBC01"});


        setTimeout(function () {
            $("#s" + id + "-name").removeClass('speakerHidden fadeOutLeft');
            $("#s" + id + "-name").addClass('animated speakerVisible fadeInLeft');}, 100
        );

        setTimeout(function () {
            $("#s" + id + "-info").removeClass('speakerHidden fadeOutLeft');
            $("#s" + id + "-info").addClass('animated speakerVisible fadeInLeft');}, 200
        );
    }

}

function removeCurrent() {
    $("#s" + past).css({"border-top": "3px solid transparent"});

    if(past !== 0){

        $("#s" + past + "-name").removeClass();
        $("#s" + past + "-name").addClass("speaker-name speakerHidden");

        $("#s" + past + "-info").removeClass();
        $("#s" + past + "-info").addClass("speakerHidden");
    }
}

$(document).ready(function(){                    
    $(window).scroll(function(){
        let sT =  $(window).scrollTop();
        $('.hidden-nav-logo').css({
            opacity: (sT < 201 ? 0 : (sT > 300 ? 1 : (sT - 200)/100))
        });

        var wScroll = $(this).scrollTop();
        $('.jumbotron').css({
       'transform': 'translate(0px, -' + (wScroll/7)+'px)'
    });
    });
});
