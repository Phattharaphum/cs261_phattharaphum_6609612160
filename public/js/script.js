const inputUser = document.getElementById("userinp");
const inputPass = document.getElementById("passinp");
const loginForm = document.getElementById("loginForm");
const loginInfo = document.getElementById("loginInfo");

inputUser.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        inputPass.focus();
    }
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();  
    const username = inputUser.value;
    const password = inputPass.value;
    
   
    loginInfo.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});
