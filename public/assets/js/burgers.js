// Make sure we wait to attach handlers until the DOM is fully loaded.

$(function() {
    $(".submitBtn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let burgerData = {
            burger: $("#burgerName").val().trim(),
            devoured: false
        };
        // Send the POST request - 
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerData
        }).then(
            function() {
                console.log("New burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devour").on("click", function(event){
        let ID= $(this).data("id");

        // Send the PUT request
        $.ajax("/api/burgers/" + ID, {
            type: "PUT",
            data: 1
        }).then(
            function() {
                console.log("Changed devoured to 1");
                location.reload();
            }
        );

    });

});