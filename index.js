score = document.getElementById("scorehome")
score2 = document.getElementById("scoreguest")
home = document.getElementById("homeTitle")
guest = document.getElementById("guestTitle")
homeredAmount = document.getElementById("redCardHome")
homeyellowAmount = document.getElementById("yellowCardHome")
guestredAmount = document.getElementById("redCardGuest")
guestyellowAmount = document.getElementById("yellowCardGuest")

let counthome = 0 
let countguest = 0
let countyellowhome = 0
let countyellowguest = 0
let countredhome = 0
let countredguest = 0


function counter() {
    counthome +=1  
    score.textContent = counthome 
}

function counter2() {
    countguest +=1  
    score2.textContent = countguest 
}

function yellowCardHome() {
    countyellowhome += 1 
    homeyellowAmount.textContent = countyellowhome
}

function redCardHome() {
    countredhome += 1 
    homeredAmount.textContent = countredhome
}

function yellowCardGuest() {
    countyellowguest += 1 
    guestyellowAmount.textContent = countyellowguest
}

function redCardGuest() {
    countredguest += 1 
    guestredAmount.textContent = countredguest
}

function netherlands() {
    home.textContent = "Netherlands"
    guest.textContent = "Portugal"
}

function germany() {
    home.textContent = "Germany"
    guest.textContent = "Belgium"
}

function france() {
    home.textContent = "France"
    guest.textContent = "Poland"
}

function italy() {
    home.textContent = "Italy"
    guest.textContent = "UK"
}

function reset() {
    home.textContent = "HOME"
    guest.textContent = "GUEST"
    score.textContent = 0
    score2.textContent = 0
    homeyellowAmount.textContent = 0
    homeredAmount.textContent = 0
    guestyellowAmount.textContent = 0
    guestredAmount.textContent = 0
}

