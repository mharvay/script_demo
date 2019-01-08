/**
 * 初始化
 */
$(function() {
    var searchTab = $('#search-tab');
    /*  searchTab.mouseover(function() {
         var $this = $(this);
         $this.height(78);
     });
     searchTab.mouseout(function() {
         var $this = $(this);
         $this.height(39);
     }); */
    $("#tab_1").click(function() {
        if (!$(this).hasClass('selected')) {
            $("#tab_1").addClass(" selected");
            $("#tab_2").removeClass("selected");
            $("#tab_3").removeClass("selected");
        }
    });
    $("#tab_2").click(function() {
        if (!$(this).hasClass('selected')) {
            $("#tab_2").addClass(" selected");
            $("#tab_1").removeClass("selected");
            $("#tab_3").removeClass("selected");
        }
    });
    $("#tab_3").click(function() {
        if (!$(this).hasClass('selected')) {
            $("#tab_3").addClass(" selected");
            $("#tab_1").removeClass("selected");
            $("#tab_2").removeClass("selected");
        }
    });
    $("#keyword").on("focus", function() {
        var keyword = $("#keyword").val();
        if (keyword != "") {
            $(".search-common-pannel i").css('display', 'none');
        }
    });
    $("#keyword").on("blur", function() {
        var keyword = $("#keyword").val();
        if (keyword == "") {
            $(".search-common-pannel i").css('display', '');
        }
    });
    $('#keyword').live("input propertychange", function() {
        var keyword = $("#keyword").val().trim();
        if (keyword.length == 0) {
            $(".search-common-pannel i").css('display', 'block');
        } else {
            $(".search-common-pannel i").css('display', 'none');
        }
    });
});