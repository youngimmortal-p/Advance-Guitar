function myfunction(){
    let navEL = document.getElementById("nav-bar")
    if(navEL.style.display === "block"){
        navEL.style.display = "none" 
    } else{
        navEL.style.display = "block"
    }

}
let inputEL = document.getElementById("email")
 
inputEL.setAttribute("size", 
inputEL.getAttribute("placeholder").length)

