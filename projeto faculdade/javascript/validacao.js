const form = document.getElementById('form')
const nome_input = document.getElementById('nome-input')
const email_input = document.getElementById('email-input')
const senha_input = document.getElementById('senha-input')
const repita_senha_input = document.getElementById('repita-senha-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
   let errors = []

   if(repita_senha_input){
    errors = getSignupFormErrors(nome_input.value, email_input.value, senha_input.value, repita_senha_input.value)
   }
   else{
    errors = getLoginFormErrors(email_input.value, senha_input.value)
   }

   if(errors.length > 0){
    e.preventDefault()
    error_message.innerText = errors.join(". ")
   }
})

function getSignupFormErrors(nome, email, senha, repitaSenha){
    let errors = []

    if(nome === '' || nome == null){
        errors.push('Nome é obrigatório')
        nome_input.parentElement.classList.add('incorreto')
    }
    if(email === '' || email == null){
        errors.push('Email é obrigatório')
        email_input.parentElement.classList.add('incorreto')
    }
    if(senha === '' || senha == null){
        errors.push('Senha é obrigatório')
        senha_input.parentElement.classList.add('incorreto')
    }
    if(senha !== repitaSenha){
        errors.push('Senhas não são iguais.')
        senha_input.parentElement.classList.add('incorreto')
        repita_senha_input.parentElement.classList.add('incorreto')
    }
    return errors;
}

function getLoginFormErrors(email, senha){
    let errors = []

if(email === '' || email == null){
        errors.push('Email é obrigatório')
        email_input.parentElement.classList.add('incorreto')
    }
    if(senha === '' || senha == null){
        errors.push('Senha é obrigatório')
        senha_input.parentElement.classList.add('incorreto')
    }

    return errors;

}
const allInputs = [nome_input, email_input, senha_input, repita_senha_input].filter(input => input != null)
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorreto')){
            input.parentElement.classList.remove('incorreto')
        }
    })
})