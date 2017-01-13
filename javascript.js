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
