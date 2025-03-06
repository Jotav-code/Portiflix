const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confimation')


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    checkUsername()
    checkEmail()
    checkPassword()
    checkPasswordConfirmation()
})

function checkUsername (){
    const usernameValue = username.value

    if(usernameValue === ''){
        error(username,"Preencher username!")
    }
    else{
        const form = username.parentElement
        form.className = 'form-content'
    }
}
function error (input,mensage){
    const formControl = input.parentElement
    const span = formControl.querySelector('span')
    span.innerText = mensage
    
    formControl.className = 'form-content error'
}

function checkEmail (){
    const emailValue = email.value

    if(emailValue === ''){
        error(email,"Preencher email!")
    }
    else{
        const form = email.parentElement
        form.className = 'form-content'
    }
}
function checkPassword (){
    const passwordValue = password.value

    if(passwordValue === ''){
        error(password,"Preencher senha!")
    }
    else 
        if (passwordValue.length < 8){
            error(password,"Sua senha deve conter no minimo 8 caracteres") 
    }
    else{
        const form = password.parentElement
        form.className = 'form-content'
    }
}
function checkPasswordConfirmation (){
    const passwordConfimationValue = passwordConfirmation.value
    const passwordValue = password.value

    if(passwordConfimationValue !== passwordValue){
        error(passwordConfirmation,"Sua senha deve ser igual!")
    }
    else{
        const form = passwordConfirmation.parentElement
        form.className = 'form-content'
    }
}