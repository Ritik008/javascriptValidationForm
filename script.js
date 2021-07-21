const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const emailId = document.querySelector("#emailId")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const submitButton = document.querySelector(".submit-btn")
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    isFieldEmpty()
})


function isFieldEmpty() {
    if(firstName.value === "") {
        showError(firstName, "First Name cannot be empty")
    }else {
        showSuccess(firstName)
    }

    if(lastName.value === "") {
        showError(lastName, "Last Name cannot be empty")
    }else {
        showSuccess(lastName)
    }

    if(emailId.value === "") {
        showError(emailId, "Email Id cannot be empty")
    }else {
        showSuccess(emailId)
    }
    
    if(password.value === "") {
        showError(password, "Password cannot be empty")
    }else {
        showSuccess(password)
    }
    
    if(confirmPassword.value === "") {
        showError(confirmPassword, "Confirm Password cannot be empty")
    }else if(confirmPassword.value !== password.value) {
        showError(confirmPassword, "Password did't match")
    }else {
        showSuccess(confirmPassword)
    }
}


function showError(htmlElement, message) {
   const parent = htmlElement.parentNode
   const errorMessage = parent.querySelector(".errorMessage")
   htmlElement.classList.add("error")
   if(htmlElement.classList.contains("success")) htmlElement.classList.remove("success")
   const errorIcon = parent.querySelector(".error-icon")
   const successIcon = parent.querySelector(".success-icon")
   errorIcon.style.visibility = "visible"
   successIcon.style.visibility = "hidden"
   errorMessage.textContent = message
   errorMessage.style.display = "block"
}

function showSuccess(htmlElement) {
    const parent = htmlElement.parentNode
    const errorMessage = parent.querySelector(".errorMessage")
    htmlElement.classList.add("success")
    if(htmlElement.classList.contains("error")) htmlElement.classList.remove("error")
    const errorIcon = parent.querySelector(".error-icon")
    const successIcon = parent.querySelector(".success-icon")
    successIcon.style.visibility = "visible"
    errorIcon.style.visibility = "hidden"
    errorMessage.style.display = "none"
}

