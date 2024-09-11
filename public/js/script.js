const inputUser= document.getElementById("userinp")
const inputpass= document.getElementById("passinp")

inputUser.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        event.preventDefault();
        inputpass.focus();
    }
});