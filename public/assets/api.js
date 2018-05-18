$(function(){
    $(".eat-btn").on("click", function(event){
       var id = $(this).attr("id");
       var newStatus = {
           devoured: 1
       };

       $.ajax("api/burgers/" + id, {
           type: "PUT",
           data: newStatus
       }).then(
            function() {
                console.log("Devoured")
                location.reload()
            }
       )
    })

    $(".create-form").on("submit", function(event) {
        event.preventDefault()

        var newBurger = {
            name: $("#bname").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("did it")
                location.reload()
            }
        )

    })

    












})