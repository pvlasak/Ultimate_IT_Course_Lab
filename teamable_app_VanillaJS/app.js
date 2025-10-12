function handleEditProfile() {
    new Datepicker('#input-birthday')
    var updatedName = document.getElementById("input-name")
    var name = document.getElementById("name").textContent
    updatedName.value = name

    var updatedEmail = document.getElementById("input-email")
    var email = document.getElementById("email").textContent
    updatedEmail.value = email

    var updatedInterests = document.getElementById("input-interests")
    var interests = document.getElementById("interests").textContent
    updatedInterests.value = interests

    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {
    var updatedName = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updatedName

    var updatedEmail = document.getElementById("input-email").value
    var email = document.getElementById("email")
    if (validator.isEmail(updatedEmail)){
        email.textContent = updatedEmail
    } else {
        alert('this is not valid email format')
    }

    var updatedInterests = document.getElementById("input-interests").value
    var interests = document.getElementById("interests")
    interests.textContent = updatedInterests

    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"
}