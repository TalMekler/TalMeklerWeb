// Scroll Reveal
const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: false
});

sr.reveal(".trigger-top" , {
    origin: "top"
})
sr.reveal(".trigger-right" , {
    origin: "right"
})
sr.reveal(".trigger-bottom" , {
    origin: "bottom"
})
sr.reveal(".trigger-left" , {
    origin: "left"
})
sr.reveal(`.reveal-interval-on`, {
    interval: 200
})
sr.reveal(`.reveal-interval-on-fast`, {
    interval: 100
})
sr.reveal(`.trigger-form`, {
    distance: '0px',
    origin: 'top',
    reset: false
})
// sr.reveal(`.trigger-right`, {
//     origin: 'right'
// })
// sr.reveal(`.trigger-bottom`, {
//     origin: 'bottom'
// })
// sr.reveal(`.trigger-top`, {
//     origin: 'top'
// })

// ScrollReveal().reveal('trigger');