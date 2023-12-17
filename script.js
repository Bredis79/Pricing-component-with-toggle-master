$(function(){

    $('#toggle').on('click', function(e) {
        $('.toggle-A').toggleClass("toggle-M"); //you can list several class names 
        
            $(".card__monthly").toggle()
            $(".card__monthly-middle").toggle()
            $(".card__annually").toggle()
            $(".card__annually-middle").toggle()
            
            
    })
})

        


   
    



