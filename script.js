const button = document.getElementById("hamburger");
const content = document.getElementById("dropdown");

button.addEventListener("click", (event)=>
     {
        if (content.style.display == "none") {
            content.style.display ="block"
        } else {
            content.style.display ="none"
        }
    })
