var social_links = document.querySelectorAll('body .side-social a')

social_links.forEach((link)=>{
    link.addEventListener('mouseover', ()=>{
        console.log(link)
        var desc = link.children[1];
        desc.classList.add('active');
    })
    link.addEventListener('mouseout', ()=>{
        var desc = link.children[1];
        desc.classList.remove('active');
    })
})