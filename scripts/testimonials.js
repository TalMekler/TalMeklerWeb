$(document).ready(function () {
    var points = $("main section.testimonials .testimonials-view .points .point");
    var testomonial_num, slide_to, testimonials_width;
    var testimonials = $("main section.testimonials .testimonials-view .testimonials-wrapper .testimonial");
    var testimonials_wrapper = $("main section.testimonials .testimonials-view .testimonials-wrapper");
    
    function clearActivePoints(){
        points.removeClass("active");
    }
    function slideTestimonials(){
        slide_to = -((testomonial_num-1) * testimonials_width);
        testimonials_wrapper.animate({
            right: slide_to
        }, 1000);
    }
    function calcTestimonialsWidth(){
        var width = testimonials.width();
        var padding_left = parseInt(testimonials.css('padding-left').split('px')[0]);
        var padding_right = parseInt(testimonials.css('padding-right').split('px')[0]);
        testimonials_width = width + padding_left + padding_right;
    }
    points.click(function(){
        clearActivePoints();
        $(this).addClass("active")
        testomonial_num = parseInt($(this).attr('data-testimonial'));
        calcTestimonialsWidth();
        slideTestimonials();
    })
    var view_width = $('section.testimonials .testimonials-view').width();
    var num_of_testimonial = $('section.testimonials .testimonials-view .testimonials-wrapper .testimonial').length;
    testimonials_wrapper.css("width", view_width * num_of_testimonial)
});