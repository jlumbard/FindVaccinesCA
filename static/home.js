$(document).ready(function() {
    console.log("Hello")
    //Gonna add a province event listener to each to redirect to their page
    
    const provinceList =  document.querySelectorAll('.province_svg')

    for (const prov of provinceList){
        prov.addEventListener('click',function(event){

            // //This was a redirect, we're not gonna do this for now.
            // console.log("province click")
            // console.log(event.target)
            // console.log(event.target.id)
            // // window.location = '/Province/' + event.target.id
            // if(event.target.class != 'province_svg'){
            //     window.location = '/Province/' + event.target.closest('.province_svg').id
            // }
            // else{
            //     window.location = '/Province/' + event.target.id
            // }

            var modal = document.getElementsByClassName('modal')[0];
            modal.style.display = "inline";
            var modalHeader = document.getElementsByClassName('modalHeader')[0];
            modalHeader.innerHTML = ""

            var targetText = ""
            if(event.target.class != 'province_svg'){
                targetText =  event.target.closest('.province_svg').id
            }
            else{
                targetText =  event.target.id
            }
            console.log(targetText)
            FullTargetText = "Find Vaccines In " + targetText
            modalHeader.appendChild(document.createTextNode(FullTargetText))

            console.log('#'+targetText+'_Guidance')
            var elementToAppear = document.querySelector('#'+targetText+'_Guidance');
            elementToAppear.style.display = 'inline'

            //Set the redirect
            document.querySelector('.CTAButton2 a').href = "/Province/" + targetText
        })

    }

    document.querySelector('#CTAButton').addEventListener('click',function(event){
        console.log("clicked")
        $("html, body, .AllContainer").animate({ scrollTop: $('#map').offset().top }, 2000);
        
    })
});