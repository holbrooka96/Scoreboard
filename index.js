let teamScore = 0
let count = 0
window.addtoScore = function(teamScoreText)
{
    if (teamScoreText === 'a') {
        teamScore = document.getElementById("teamA-score")
    } else if (teamScoreText = 'b')
    {
        teamScore = document.getElementById("teamB-score")
    }
    count = Number(teamScore.textContent)
    count += Number(Object.values(event.target.innerText).join(''))
    teamScore.textContent = count
}