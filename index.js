let openLogin = document.getElementById('loginButton')
let loginWindow = document.getElementById('loginWindow')
let closeButton = document.getElementById('closeWindow')

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

openLoginWindow()
closeLoginWindow()