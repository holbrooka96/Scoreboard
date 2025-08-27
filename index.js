let teamScore = 0
let count = 0
window.addtoScore = function(teamScoreText)
{
    teamScore = "team"+teamScoreText.toUpperCase()+"-score"
    teamScore = document.getElementById(teamScore)
    count = Number(teamScore.textContent)
    count += Number(Object.values(event.target.innerText).join(''))
    teamScore.textContent = count
}