window.onload = function() {
    document.getElementById("boundary1").onmouseover = overBoundary;
}

function overBoundary() {
    document.getElementById("boundary1").setAttribute("class","boundary youlose");
}
