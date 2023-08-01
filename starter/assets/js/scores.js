var clearScorebtn = document.getElementById("clear");
clearScorebtn.addEventListener("click", clearScores);
var scoreListElement = document.getElementById("highscores");
function getScores() {
    // Get scores saved in localStorage
    // Parsing the JSON string to an object
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
   
    scoreListElement.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
    let ol = document.createElement("ol");
    ol.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
    scoreListElement.append(ol);
}
}

// clear scores
function clearScores() {
    localStorage.clear();
    scoreListElement.innerHTML="";
}
