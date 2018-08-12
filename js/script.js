$(document).ready(function() {
    $("#rollTwoButton").hide();
    $("#newGameButton").hide();
    $("#oldBrowser").hide();
    $("#rollOneButton").show();
});

let game = {
    curFrame: 0,
    curScore: 0,
    strikes: 0
};

let curFrameObj = {
    strike: false,
    spare: false
};

let score = {
    pointsPerFrame: []
};

let finalScore = document.getElementById("final-score");

function rollOne() {
    let frame = document.getElementById(game.curFrame);
    let rightScore = document.getElementsByClassName("frame-right")[
        game.curFrame
    ];
    let leftScore = document.getElementsByClassName("frame-left")[
        game.curFrame
    ];
    let bottomScore = document.getElementsByClassName("frame-bottom")[
        game.curFrame
    ];
    let rollOneScore = Math.floor(Math.random() * 11);

    if (curFrameObj.strike && game.strikes == 2) {
        score.pointsPerFrame.push(20 + rollOneScore);
        document.getElementsByClassName("frame-bottom")[
            game.curFrame - 2
        ].innerHTML = score.pointsPerFrame.reduce(
            (accum, curVal) => accum + curVal
        );
    }

    if (curFrameObj.spare) {
        curFrameObj.spare = false;
        score.pointsPerFrame.push(10 + rollOneScore);
        document.getElementsByClassName("frame-bottom")[
            game.curFrame - 1
        ].innerHTML = score.pointsPerFrame.reduce(
            (accum, curVal) => accum + curVal
        );
        game.curFrame == 10 ? endGame() : null;
    }

    if (rollOneScore === 10) {
        rightScore.innerHTML = "x";
        $("#rollTwoButton").hide();
        game.curFrame++;
        game.strikes++;
        curFrameObj.strike = true;
        document.getElementsByClassName("frame-bottom")[
            game.curFrame - 1
        ].innerHTML = score.pointsPerFrame.reduce(
            (accum, curVal) => accum + curVal
        );
        game.curFrame == 10 ? endGame() : null;
    } else if (rollOneScore <= 9) {
        leftScore.innerHTML = rollOneScore;
        game.curScore = rollOneScore;
        $("#rollOneButton").hide();
        $("#rollTwoButton").show();
        game.strikes = 0;
    } else {
        return null;
    }
    return rollOneScore;
}

function rollTwo() {
    let frame = document.getElementById(game.curFrame);
    let rightScore = document.getElementsByClassName("frame-right")[
        game.curFrame
    ];
    let leftScore = document.getElementsByClassName("frame-left")[
        game.curFrame
    ];
    let bottomScore = document.getElementsByClassName("frame-bottom")[
        game.curFrame
    ];
    let rollTwoScore = Math.floor(Math.random() * (11 - game.curScore));

    if (curFrameObj.strike) {
        curFrameObj.strike = false;
        let strikeScore = rollTwoScore + 10 + game.curScore;
        score.pointsPerFrame.push(strikeScore);
        document.getElementsByClassName("frame-bottom")[
            game.curFrame - 1
        ].innerHTML = score.pointsPerFrame.reduce(
            (accum, curVal) => accum + curVal
        );
    }

    if (rollTwoScore + game.curScore === 10) {
        curFrameObj.spare = true;
        rightScore.innerHTML = "/";
        $("#rollTwoButton").hide();
        $("#rollOneButton").show();
        game.curFrame++;
        game.curScore = 0;
    } else if (rollTwoScore + game.curScore <= 9) {
        rightScore.innerHTML = rollTwoScore;
        score.pointsPerFrame.push(game.curScore + rollTwoScore);
        bottomScore.innerHTML = score.pointsPerFrame.reduce(
            (accum, curVal) => accum + curVal
        );
        $("#rollTwoButton").hide();
        $("#rollOneButton").show();
        game.curFrame++;
        game.curScore = 0;
        game.curFrame == 10 ? endGame() : null;
    } else {
        return null;
    }
}

function endGame() {
    $("#rollOneButton").hide();
    $("#newGameButton").show();
    finalScore.innerHTML =
        "Final score: " +
        score.pointsPerFrame.reduce((accum, curVal) => accum + curVal);
}

function newGame() {
    location.reload();
}
