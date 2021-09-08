var loggedAsAdmin = false
var polls = 0
var addPollChoices = 1
var votearray = [];
var arrayindex = 0;

window.onload = function() {
    for (let i = 1; i <= polls; i++)
        document.getElementById('poll' + i + 'Choices').style.display = "none"
}
document.getElementById('removePolls').style.display = "none"

function login() {
    document.getElementById('overlay').style.display = "block"
    document.getElementById('login').style.display = "block"
}

function closeWindow() {
    document.getElementById('overlay').style.display = "none"
    document.getElementById('login').style.display = "none"
    document.getElementById('addPoll').style.display = "none"
    document.getElementById('addPoll').innerHTML = '<h3>Äänestyksen nimi:</h3><input type="text" name="Nimi..." id="addPollName"><h4>Anna vaihtoehdot:</h4><div id="addpollChoices"><input type="text" id="addPollChoice1"></div><br><button class="header-button" onclick="addChoice()">Lisää vaihtoehto</button><br><button class="header-button" onclick="addPoll()">Lisää äänestys</button><button class="header-button" onclick="closeWindow()">Peruuta</button>'

}

function validateLogin() {
    if (document.getElementById('loginName').value == "admin" && document.getElementById('loginPassword').value == "admin") {
        loggedAsAdmin = true
        document.getElementById('loggedAs').innerText = "Ylläpitäjä"
        document.getElementById('removePolls').style.display = "inline"
        closeWindow()
    } else {
        alert('Virheellinen käyttäjänimi tai salasana!')
    }
}

function expandPoll(id) {
    if (document.getElementById('poll' + id + 'Choices').style.display != "none") {
        document.getElementById('poll' + id + 'Choices').style.display = "none"
        document.getElementById('poll' + id + 'button').innerText = "Avaa"
    } else {
        document.getElementById('poll' + id + 'Choices').style.display = "block"
        document.getElementById('poll' + id + 'button').innerText = "Sulje"
    }

}

function addPollScreen() {
    addPollChoices = 1
    document.getElementById('overlay').style.display = "block"
    document.getElementById('addPoll').style.display = "block"
}

function addChoice() {
    addPollChoices++
    document.getElementById('addpollChoices').innerHTML += '<input type="text" id="addPollChoice' + addPollChoices + '">'
}

function addPoll() {
    polls++
    let pollname = document.getElementById('addPollName').value
    document.getElementById('polls').innerHTML += '<div id="poll' + polls + '" class="poll"><div class="pollheader"><span id="poll' + polls + 'question" class="pollname">' + pollname + '</span><button id="poll' + polls + 'button" onclick="expandPoll(' + polls + ')" class="header-button">Avaa</button></div><div id="poll' + polls + 'Choices"></div>'
    for (var i = 1; i <= addPollChoices; i++) {
        let choicevalue = document.getElementById('addPollChoice' + i).value
        votearray.push(0)
        document.getElementById('poll' + polls + 'Choices').innerHTML += '<h2><span id="poll' + polls + 'choice' + arrayindex + '">' + choicevalue + '</span> <button class="header-button" onclick="voteChoice(' + polls + ' , ' + arrayindex + ')">Äänestä</button>Ääniä: <span id="poll' + polls + 'choice' + arrayindex + 'votes">' + votearray[arrayindex] + '</span></h2>'
        arrayindex++
    }
    document.getElementById('poll' + polls + 'Choices').style.display = 'none'
    closeWindow()
}

function voteChoice(pollID, choiceID) {
    // console.log(pollID)
    // console.log(choiceID)
    let choice = document.getElementById('poll' + pollID + 'choice' + choiceID + 'votes')
    votearray[choiceID] += 1
    choice.innerHTML = votearray[choiceID]
}

function removePoll() {
    document.getElementById('overlay').style.display = "block"
    document.getElementById('removePollWindow').style.display = "block"

}