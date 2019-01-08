/**
 * 初始化
 */
$(function() {
    var searchTab = $('#search-tab');
    //var items = $('#searchTab ul li');
    searchTab.mouseover(function() {
        var $this = $(this);
        $this.height(78);
    });
    searchTab.mouseout(function() {
        var $this = $(this);
        $this.height(39);
    });
    $("#tab_1").click(function() {
        if (searchTab.height() == 78) {
            searchTab.height(39)
        } else {
            searchTab.height(78)
        }
    });
    $("#tab_2").click(function() {
        var temp = $("#tab_2").html();
        $("#tab_2").html($("#tab_1").html())
        $("#tab_1").html(temp);
        searchTab.height(39);
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