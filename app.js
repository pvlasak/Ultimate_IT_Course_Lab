function handleEditProfile() {
    var name = document.getElementById("name").textContent
    var input_name = document.getElementById("input-name")
    input_name.value = name

    var email = document.getElementById("email").textContent
    var input_email = document.getElementById("input-email")
    input_email.value = email

    var interest = document.getElementById("interest").textContent
    var input_interest = document.getElementById("input-interest")
    input_interest.value = interest


    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {
    var updated_name = document.getElementById("input-name").value
    var name = document.getElementById("name")
    name.textContent = updated_name

    var updated_email = document.getElementById("input-email").value
    var email = document.getElementById("email")
    email.textContent = updated_email

    var updated_interest = document.getElementById("input-interest").value
    var interest = document.getElementById("interest")
    interest.textContent = updated_interest

    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"
}