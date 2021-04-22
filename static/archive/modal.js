$(document).ready(function() {
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        console.log("close modal")
        modal.style.display = "none";
        const allProvinceGuidances = document.querySelectorAll('.provinceGuidance');
        for (const prov of allProvinceGuidances){
            prov.style.display = 'none';
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    //This is broken
    window.onclick = function(event) {
        console.log(event.target);
        //if they click outside the modal then display none it. But if its one of the svgs don't do that haha 
        if (event.target != modal && (event.target.className.baseVal !== 'province_svg' && event.target.parentNode.className.baseVal !== 'province_svg')) {
            modal.style.display = "none";
        }
    }
});