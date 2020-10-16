// js
const points = document.querySelectorAll("main section.testimonials .testimonials-view .points .point");
var testomonial_num, slide_to, width;
const testimonials = document.querySelectorAll("main section.testimonials .testimonials-view .testimonials-wrapper .testimonial");
const testimonials_wrapper= document.querySelector("main section.testimonials .testimonials-view .testimonials-wrapper");

function clearActivePoints() {
    points.forEach((point)=>{
        point.classList.remove("active");
    })
}
function slideTestimonials() {
    slide_to = -((testomonial_num - 1) * width);
    testimonials_wrapper.style.right = slide_to + 'px';
    
}
function calcTestimonialsWidth() {
    width = testimonials[0].offsetWidth;
}

points.forEach((point)=>{
    // console.log(point)
    point.addEventListener('click', (e)=>{
        clearActivePoints();
        // console.log(e.target);
        e.target.classList.add("active");
        testomonial_num = parseInt(e.target.getAttribute('data-testimonial'));
        calcTestimonialsWidth();
        slideTestimonials();
    })
})

var view_width = document.querySelector('section.testimonials .testimonials-view').offsetWidth;
var num_of_testimonial = document.querySelectorAll('section.testimonials .testimonials-view .testimonials-wrapper .testimonial').length;
testimonials_wrapper.style.width = (view_width * num_of_testimonial) + 'px';