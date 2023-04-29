// Hide Buttons
$("#batting").hide();
$("#okay").hide();
$("#play-again").hide();
$(".rr").hide();
$(".tar").hide();
$(".runs-need").hide();
$(".your-score").hide();


// Gameplay

$(function () {
    var computerScore = 0;
    var userScore = 0;
    var aiBallsPlayed = 0;
    var userBallsPlayed = 0;

    // Generating Runs
    function getRandomRuns() {
        const allowedRuns = [0, 1, 2, 3, 4, 6];
        const randomIndex = Math.floor(Math.random() * allowedRuns.length);
        const randomRuns = allowedRuns[randomIndex];
        $("#last-shot").text(randomRuns);

        if (randomRuns === 6) {
            $("#last-shot").css("background-color", "violet");
            $(".runs-data:eq(" + (userBallsPlayed + aiBallsPlayed) + ")").addClass("run-6");

        } else if (randomRuns === 4) {
            $("#last-shot").css("background-color", "blue");
            $(".runs-data:eq(" + (userBallsPlayed + aiBallsPlayed) + ")").addClass("run-4");

        } else{
            $("#last-shot").css("background-color", "");
        }

        return randomRuns;
    }

    //   Bowling Function
    $("#bowling").on("click", function () {
        if (aiBallsPlayed < 12) {
            var randomRuns = getRandomRuns();
            computerScore += randomRuns;
            $("#computer-score").text(computerScore);
            aiBallsPlayed++;
            $("#balls-played").text(aiBallsPlayed + userBallsPlayed + " (12)");
            $(".runs-data:eq(" + (aiBallsPlayed - 1) + ")").text(randomRuns);
            $("#balls-left").text(12 - aiBallsPlayed);

        }

        if (aiBallsPlayed >= 12) {
            $("#bowling").hide();
            $("#batting").hide();
            $("#okay").show();
            $("#target").text(computerScore + 1);
            $("#required-runs").text(computerScore + 1);
            $(".inning-message").text("You Need " + (computerScore + 1) + " Runs to Win the Match" + " in 12 Balls");
        }
        $("#crr").text((computerScore/aiBallsPlayed*6).toFixed(2));
    });

    // Batting Function
    $("#balls-left").text(12);
    $("#batting").on("click", function () {
        if (userBallsPlayed < 12) {
            var randomRuns = getRandomRuns();
            userScore += randomRuns;
            $("#user-score").text(userScore);
            userBallsPlayed++;
            $("#balls-played").text(userBallsPlayed + " (12)");
            $("#balls-left").text(12 - userBallsPlayed);
            $("#required-runs").text(computerScore + 1 - userScore);
            $(".runs-data:eq(" + (userBallsPlayed - 1) + ")").text(randomRuns);

            $("#crr").text((userScore/userBallsPlayed*6).toFixed(2));
            $("#rrr").text(((computerScore + 1 - userScore) / ((12 - userBallsPlayed) / 6)).toFixed(2));


            
        if (randomRuns == 6) {
            $("#last-shot").css("background-color", "violet");
            $(".runs-data:eq(" + (userBallsPlayed - 1) + ")").addClass("run-6");
        } else if (randomRuns == 4) {
            $("#last-shot").css("background-color", "blue");
            $(".runs-data:eq(" + (userBallsPlayed - 1) + ")").addClass("run-4");
        } else {
            $("#last-shot").css("background-color", "");
        }

            if (userScore > computerScore) {
                $(".inning-message").show();
                $(".inning-message").text("You Won the Match!");
                $("#batting").hide();
                $("#play-again").show();

            } else if (userScore < computerScore && userBallsPlayed >= 12) {
                $(".inning-message").show();
                $(".inning-message").text("You Lost Match");
                $("#batting").hide();
                $("#play-again").show();

            } else if (userScore === computerScore && userBallsPlayed >= 12) {
                $(".inning-message").show();
                $(".inning-message").text("Match Tied!");
                $("#batting").hide();
                $("#play-again").show();
            }
        }
    });
});

// Play Again
$("#play-again").on("click", function () {
    window.location.href = "index.html";
});


// Mid Inning Button
$("#okay").on("click", function () {
    $("#balls-left").text(12);
    $("#over .runs-data").text('');
    $("#batting").show();
    $("#okay").hide();
    $(".inning-message").hide();
    $(".runs-data").removeClass("run-4 run-6");
    $(".rr").show();
    $(".tar").show();
    $(".runs-need").show();
    $(".your-score").show();
    $("#crr").text("")
})


