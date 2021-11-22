/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus Для видимости подчеркнутой линии под вводом текста логина и пароля ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus Убрать видимость ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function Когда нажатькурсором добавляется и убирается подчернутость в поле input на форме пользователя ===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})
