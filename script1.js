var box = document.getElementById('box');
var output = document.querySelector('.output');

box.addEventListener('mousemove', runEvent);


function runEvent(e) {
    output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3>' + '<h3>MouseY: ' + e.offsetY + '</h3>';
    box.style.backgroundColor = "rgb("+ e.offsetX + "," + e.offsetY + " , 40 )"
}