const downArrow = document.getElementById('downArrow');
const downArrowHover = document.getElementById('downArrowHover');
console.log(downArrow);
downArrow.addEventListener('mouseover', function handleMouseOver() {
    downArrow.style.display = 'none';
    downArrowHover.style.display = "block"; 
    console.log("HOVER");
});

downArrowHover.addEventListener('mouseout', function handleMouseOver() {
    downArrowHover.style.display = 'none';
    downArrow.style.display = "block"; 
});

