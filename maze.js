/*window.onload = function() {
    document.getElementById("boundary1").onmouseover = overBoundary;
}

function overBoundary() {
    document.getElementById("boundary1").setAttribute("class","boundary youlose");
}

*/

window.onload = function() {
    var numBoundaries1 = document.querySelectorAll("#maze .boundary");
    for (var num = 0; num < numBoundaries1.length; num++) 
        numBoundaries1[num].onmouseover = myfunction;
    
}

function myfunction() {
    var numBoundaries2 = document.querySelectorAll("#maze .boundary");
    for (var num = 0; num < numBoundaries2.length; num++) 
        numBoundaries2[num].className = "boundary youlose";
    
}
