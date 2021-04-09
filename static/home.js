$(document).ready(function() {
    console.log("Hello")
    //Gonna add a province event listener to each to redirect to their page
    
    const provinceList =  document.querySelectorAll('.province_svg')

    for (const prov of provinceList){
        prov.addEventListener('click',function(event){
            console.log("province click")
            console.log(event.target)
            console.log(event.target.id)
            // window.location = '/Province/' + event.target.id
            if(event.target.class != 'province_svg'){
                window.location = '/Province/' + event.target.closest('.province_svg').id
            }
            else{
                window.location = '/Province/' + event.target.id
            }
        })

    }
});