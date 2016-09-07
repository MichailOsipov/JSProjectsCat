var count = 50;
var i = count;
var timerId = setInterval(function () {
    textCoordinate.textContent = i + ";";
    i--;
    if (i == 0) {
        textCoordinate.innerHTML = "";
        paint.style.display = "block";
        clearInterval(timerId);
    }
}, count);
//textCoordinate.textContent = "Done!";
//function displayCoordinates(event) {
//    textCoordinate.textContent = event.clientX + ";" + event.clientY;
//    console.log(event.clientX + ";" + event.clientY);
//}
////heh.onmousemove = displayCoordinates;
//myBody.addEventListener('mousemove', displayCoordinates);
function handler(event) {
    paint.style.marginLeft = event.clientX - +paint.style.width.slice(0, -2) / 2;
    paint.style.marginTop = event.clientY - +paint.style.width.slice(0, -2) / 2;
    paint.style.width = (+paint.style.width.slice(0, -2) + 1) + "px";
}
myBody.addEventListener('mousemove', handler);