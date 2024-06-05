
    $(document).ready(function(){
        $(".show_account").click(function(){
            $("#show_modal, #modal_background").toggle();
        });

        $(document).mouseup(function(e) {
            var modal = $("#show_modal");
            if (!modal.is(e.target) && modal.has(e.target).length === 0) {
                modal.hide();
            }
        });
    });
