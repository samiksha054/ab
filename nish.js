$(document).ready(function(){

    $("#search").keyup(function(){

        let query = $(this).val();

        if(query.length > 1){

            $.ajax({
                url: "search.php",
                method: "GET",
                data: {q: query},
                success: function(data){

                    let suggestions = JSON.parse(data);

                    let html = "";

                    suggestions.forEach(function(item){
                        html += '<div class="suggestion-item">'+item+'</div>';
                    });

                    $("#suggestions").html(html).show();
                }
            });

        } else {
            $("#suggestions").hide();
        }

    });

    $(document).on("click", ".suggestion-item", function(){
        $("#search").val($(this).text());
        $("#suggestions").hide();
    });

});
