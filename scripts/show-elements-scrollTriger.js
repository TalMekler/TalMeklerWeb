$(document).ready(function () {
    var desktop = false;
    if ($(window).width() > 1023) {
        desktop = true;
    }

    var sections = $("main section.trigger");
    var section_children, show_timing = 10;
    if (desktop) {
        $(window).scroll(function () {
            var window_scroll = $(this).scrollTop();
            sections.each(function () {
                section_children = $(this).children();
                section_children_pos = $(section_children).offset().top - window_scroll;
                if (section_children_pos <= $(window).height() - ($(window).height() / show_timing)) {
                    section_children.addClass("show");
                } else if (section_children_pos > $(window).height()) {
                    section_children.removeClass("show");
                }
            })
        });
    }else{
        sections.each(function(){
            section_children = $(this).children();
            section_children.addClass('show');
        })
    }

});