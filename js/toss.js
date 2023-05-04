$("#batting").hide();
$("#bowling").hide();
$("#comp-won").hide();

$("#comp-won").on("click", function(){
    window.location.href = "game.html";
})


//need to change after adding more logic to game 
$("#batting").on("click", function(){
    window.location.href = "game.html";
})

$("#bowling").on("click", function(){
    window.location.href = "game.html";
})



$(function() {
    $("#headsBtn").on("click", function () {

        let flipResult = Math.random();
        $("#coin").removeClass();

        if (flipResult <= 0.5) {
            $("#coin").addClass("heads");
            setTimeout(function() {
                $(".result").text("You Won The Toss, What Do You Want to Do?");
                $("#batting").show();
                $("#bowling").show();
                $("#headsBtn").hide();
                $("#tailsBtn").hide();
            }, 3500);

        } else if (flipResult >= 0.5) {
            $("#coin").addClass("tails");
            setTimeout(function() {
                $(".result").text("Computer Won The Toss and elected to bat first");
                $("#comp-won").show();
                $("#headsBtn").hide();
                $("#tailsBtn").hide();
            }, 3500);
        }

    });

    
    $("#tailsBtn").on("click", function () {

        let flipResult = Math.random();
        $("#coin").removeClass();

        if (flipResult <= 0.5) {
            $("#coin").addClass("heads");
            setTimeout(function() {
                $(".result").text("Computer Won The Toss and elected to bat first");
                $("#comp-won").show();
                $("#headsBtn").hide();
                $("#tailsBtn").hide();
            }, 3500);
            

        } else if (flipResult >= 0.5) {
            $("#coin").addClass("tails");
            setTimeout(function() {
                $(".result").text("You Won The Toss, What Do You Want to Do?");
                $("#batting").show();
                $("#bowling").show();
                $("#headsBtn").hide();
                $("#tailsBtn").hide();
            }, 3500);
        }

    });
});