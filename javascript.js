        $(document).ready(function(){
            $("a img").click(function(){
               $("body").css({ "overflow": "hidden" });
               
               $(this).click(function(){
                 $("body").css({ "overflow": "auto" });
               });
            });
        });
