import $ from "jquery";
export function ModalFunction() {
    if ($("*").hasClass("modal-hid")) {
        $(".modal-cnt").hide();
        $(".close").hide();
    } else if ($("*").hasClass("modal-shn")) {
        $(".modal-cnt").show();
        $(".close").show();
    } else {
        $(".modal-cnt").hide();
        $(".close").hide();
    }
    $(".modal-btn").on("click", function() {
        $(this).closest("[data-popup='modal']").find(".modal-cnt").show();
        $(this).closest("[data-popup='modal']").find(".close").show();
    });
    $(".close").on("click", function() {
        $(this).closest("[data-popup='modal']").find(".modal-cnt").hide();
        $(this).closest("[data-popup='modal']").find(".close").hide();
    });
}