document.getElementById("register-form").addEventListener("submit", function(a){
    a.preventDefault(); 
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    var user = {
        name: name,
        age: age,
        email: email
    };

    localStorage.setItem("user", JSON.stringify(user));
    JSON.parse(localStorage.setItem("user"))
});