const line1 = document.getElementById("l1"); 
const line2 = document.getElementById("l2");
const line3 = document.getElementById("l3");

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

async function showText(){
    await delay(1000);
    line1.style.opacity="1";
    await delay(2000);
    line2.style.opacity="1";
    await delay(2000);
    line3.style.opacity="1";
}