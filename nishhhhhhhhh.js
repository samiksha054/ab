let timer;

$("#search").keyup(function(){

    clearTimeout(timer);

    let query = $(this).val();

    timer = setTimeout(function(){

        if(query.length > 1){
            // AJAX call here
        }

    },300);

});
