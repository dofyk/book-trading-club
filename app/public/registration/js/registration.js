function submitRegistration() {
    var form = document.getElementById("login-form");
    var user = {
        email: form.email.value,
        firstName: form.firstname.value,
        lastName: form.lastname.value,
        langaraid: form.langaraid.value,
        password: form.password.value,
        type: form.type.value
    }

    $.ajax({
        url: "/register",
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(user),
        success: function(data, textStatus, xhr) {
            window.location = "/dashboard";
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log(`Status: ${xhr.status}`);
        }
    });
}

function showMajor() {
  var major = document.getElementById("major");
  var pos = document.getElementById("position");
  major.style.display = "block";
  pos.style.display = "none";
}

function showPosition() {
  var major = document.getElementById("major");
  var pos = document.getElementById("position");
  pos.style.display = "block";
  major.style.display = "none";
}
