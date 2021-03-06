const downWorkArrow = document.getElementById('down-work-arrow');
const downWorkArrowHover = document.getElementById('down-work-arrow-hover');
const firstWorkCard = document.getElementById('first-work-card');
const workCards = document.getElementById('workCards');

downWorkArrow.addEventListener('mouseover', function handleMouseOver() {
    downWorkArrow.style.display = 'none';
    downWorkArrowHover.style.display = "block"; 
    console.log("HOVER");
});

downWorkArrowHover.addEventListener('mouseout', function handleMouseOver() {
    downWorkArrowHover.style.display = 'none';
    downWorkArrow.style.display = "block"; 
});

downWorkArrowHover.addEventListener('click', function(){
    console.log("CLICK");
    workCards.style.display = "block";
    firstWorkCard.scrollIntoView({behavior: "smooth", 
                                  block: "start", 
                                  inline: "nearest"});
})

