const element = document.querySelectorAll(".memory-card");

element.forEach(element =>{
    element.style.display = "none";
});

;
let userPassword; 

document.getElementById("password-submit").onclick = function(){
    userPassword = document.getElementById("lock").value;
    if( userPassword == 12345){
                element.forEach(element =>{
            element.style.display = "";
        });
    }
}
