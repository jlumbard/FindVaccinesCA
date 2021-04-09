$(document).ready(function() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        console.log("close modal")
        modal.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    //This is broken
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});