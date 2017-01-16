        // $(document).ready(function(){
        //     $("a img").click(function(){
        //        $("body").css({ "overflow": "hidden" });
        //
        //        $("html").click(function(){
        //          $("body").css({ "overflow": "auto" });
        //        });
        //     });
        // });
$.featherlight({
    beforeOpen: function() {
        document.body.style.overflow = 'hidden';
    },
    afterEnd: function() {
        document.body.style.overflow = '';
    }
});

 $('a.gallery').featherlightGallery({
        previousIcon: '&#9664;',     /* Code that is used as previous icon */
        nextIcon: '&#9654;',         /* Code that is used as next icon */
        galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
        galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
    });

      // autoBind: '[data-featherlight-gallery]'
