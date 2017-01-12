        $(document).ready(function(){
            $("a img").click(function(){
               $("body").css({ "overflow": "hidden" });
            });
            $('body').click(function(){
               $("body").css({ "overflow": "auto" });
            });
        });
