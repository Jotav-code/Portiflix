const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password_confirmation = document.getElementById('password-confirmation')

form.addEventListener("submit", (envent)=>{
    envent.preventDefault()
    checkInputUsername()
})

function checkInputUsername(){
    const usernameValue = username.value

    if(usernameValue === ""){
        errorInput(username,"preencher um username!")
    }
    else{
        const form = document.querySelector('.form-content')
        form.className = "form-content"
    }
}
function errorInput (input,mensage){
    const formItem = input.parentElement
    const textMensage = formItem.querySelector('span')

    textMensage.innerText = mensage

    formItem.className = 'form-content error'
}
