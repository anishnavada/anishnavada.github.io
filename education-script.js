const downEducationArrow = document.getElementById('down-education-arrow');
const downEducationArrowHover = document.getElementById('down-education-arrow-hover');
const firstEducationCard = document.getElementById('first-education-card');

downEducationArrow.addEventListener('mouseover', function handleMouseOver() {
    downEducationArrow.style.display = 'none';
    downEducationArrowHover.style.display = "block"; 
    console.log("HOVER");
});

downEducationArrowHover.addEventListener('mouseout', function handleMouseOver() {
    downEducationArrowHover.style.display = 'none';
    downEducationArrow.style.display = "block"; 
});

downEducationArrowHover.addEventListener('click', function(){
    console.log("CLICK");
    firstEducationCard.scrollIntoView({behavior: "smooth", 
                                  block: "start", 
                                  inline: "nearest"});
})



