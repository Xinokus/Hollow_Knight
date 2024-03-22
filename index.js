let openLogin = document.getElementById('loginButton')
let loginWindow = document.getElementById('loginWindow')
let closeButton = document.getElementById('closeWindow')

let checkFinal = document.getElementById('checkFinal')
let cookiesWindow = document.getElementById('cookiesWindow')
let checkYes = document.getElementById('checkYes')
let checkNo = document.getElementById('checkNo')
let submitButton = document.getElementById('submitButton')
let incorrectEmail = document.getElementById('incorrectEmail')
let checkEmail = document.getElementById('electronicMail')

function openLoginWindow(){
    openLogin.addEventListener("click", () => {
        loginWindow.style.display = 'flex'
    })
}
function closeLoginWindow(){
    closeButton.addEventListener("click", () => {
        loginWindow.style.display = 'none'
    })
}

function cookiesClose(){
    if(checkFinal.style.display == 'none'){
        
    }
    else{
        checkFinal.addEventListener("click", () => {
            cookiesWindow.style.display = 'none'
        })
    }
    if(checkFinal.checked == true){
        checkFinal.checked = false
    }
    else{

    }
}
function emailSubmit(){
    submitButton.addEventListener("click", () => {
        if(checkYes.checked == true){
            if(checkEmail.value == ""){
                alert('Your E-Mail is incorrect, try again.')
            }
            else{
                if(incorrectEmail.checkVisibility() == false){
                    cookiesWindow.style.display = 'none'
                    cookiesWindow.disabled = true
                }
                else{
                    alert('Your E-Mail is incorrect, try again.')
                }
            }
        }
        else{
            alert('Please, answer the question by picking Yes or No.')
        }
    })
}
function checkOnly(){
    checkYes.addEventListener("click", () => {
        checkNo.checked = false
    })
    checkNo.addEventListener("click", () => {
        checkYes.checked = false
    })
}

setTimeout(() => cookiesWindow.style.display = 'flex', 2000)

checkOnly()
emailSubmit()
cookiesClose()
openLoginWindow()
closeLoginWindow()

let DLCVideo = document.getElementById('dlc-video')
let DLCName = document.getElementById('dlc-name')
let DLCDescription = document.getElementById('dlc-description')
let DLCSection = document.getElementById('dlc-section')
let DLCBackground = document.getElementById('dlc-back')

let Dreams = document.getElementById('dreams')
let Troupe = document.getElementById('troupe')
let Lifeblood = document.getElementById('lifeblood')
let Godmaster = document.getElementById('godmaster')

function grayScale(){
    Dreams.style.scale = '1'
    Dreams.style.filter = 'grayscale(1)'
    Troupe.style.scale = '1'
    Troupe.style.filter = 'grayscale(1)'
    Lifeblood.style.scale = '1'
    Lifeblood.style.filter = 'grayscale(1)'
    Godmaster.style.scale = '1'
    Godmaster.style.filter = 'grayscale(1)'
}

function websiteStart(){
    Dreams.style.scale = '1.01'
    Dreams.style.filter = 'grayscale(0)'
}

Dreams.onclick = function(){
    DLCVideo.outerHTML = '<video src="img/Hollow Knight Hidden Dreams.mp4" autoplay muted loop class="dlc-info-video-container" id="dlc-video"></video>'
    DLCVideo = document.getElementById('dlc-video')
    DLCSection.style.borderTop = '0.625vw solid #AA26BF'
    DLCSection.style.borderBottom = '0.625vw solid #AA26BF'
    DLCBackground.style.backgroundColor = 'rgba(170, 38, 191, 0.6)'
    DLCName.innerHTML = 'Hidden Dreams'
    grayScale()
    Dreams.style.scale = '1.01'
    Dreams.style.filter = 'grayscale(0)'
}
Troupe.onclick = function(){
    DLCVideo.outerHTML = '<video src="img/Hollow Knight The Grimm Troupe.mp4" autoplay muted loop class="dlc-info-video-container" id="dlc-video"></video>'
    DLCVideo = document.getElementById('dlc-video')
    DLCSection.style.borderTop = '0.625vw solid #CD0000'
    DLCSection.style.borderBottom = '0.625vw solid #CD0000'
    DLCBackground.style.backgroundColor = 'rgba(205, 0, 0, 0.6)'
    DLCName.innerHTML = 'The Grimm Troupe'
    grayScale()
    Troupe.style.scale = '1.01'
    Troupe.style.filter = 'grayscale(0)'
}
Lifeblood.onclick = function(){
    DLCVideo.outerHTML = '<video src="img/Hollow Knight - Nintendo Switch - Trailer.mp4" autoplay muted loop class="dlc-info-video-container" id="dlc-video"></video>'
    DLCVideo = document.getElementById('dlc-video')
    DLCSection.style.borderTop = '0.625vw solid #A1DDFF'
    DLCSection.style.borderBottom = '0.625vw solid #A1DDFF'
    DLCBackground.style.backgroundColor = 'rgba(161, 221, 255, 0.6)'
    DLCName.innerHTML = 'Lifeblood'
    grayScale()
    Lifeblood.style.scale = '1.01'
    Lifeblood.style.filter = 'grayscale(0)'
}
Godmaster.onclick = function(){
    DLCVideo.outerHTML = '<video src="img/Hollow Knight Godmaster.mp4" autoplay muted loop class="dlc-info-video-container" id="dlc-video"></video>'
    DLCVideo = document.getElementById('dlc-video')
    DLCSection.style.borderTop = '0.625vw solid #DED689'
    DLCSection.style.borderBottom = '0.625vw solid #DED689'
    DLCBackground.style.backgroundColor = 'rgba(222, 214, 137, 0.6)'
    DLCName.innerHTML = 'Godmaster'
    grayScale()
    Godmaster.style.scale = '1.01'
    Godmaster.style.filter = 'grayscale(0)'
}

websiteStart()