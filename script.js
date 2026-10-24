const memoryEl = document.querySelectorAll(".locked-memories");
const passwordEl = document.querySelector('.password-protection');
const submitBtn = document.getElementById('password-submit');
const passwordMsg = document.getElementById('password-style1');
const triangleEl = document.getElementById('scroll-triangle');
const firstMemoryEl = memoryEl[0];

memoryEl.forEach(element =>{
    element.style.display = "none";
});


let userPassword; 

document.getElementById("password-submit").onclick = function(){
    userPassword = document.getElementById("lock").value;
    if( userPassword == 12345){
                memoryEl.forEach(element =>{
            element.style.display = "";
        });
        passwordEl.style.setProperty('--shadow-color', 'green');
        submitBtn.innerText = "🔓";
        passwordMsg.innerText = "yay you're in :]"
        firstMemoryEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

triangleEl.addEventListener('click', function(){
    passwordEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

});
const randomDegrees = Math.floor(Math.random() * (max - min + 1)) + min
document.documentElement.style.setProperty('--randomrotate', '${randomDegrees}deg');