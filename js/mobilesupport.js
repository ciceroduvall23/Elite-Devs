// Import alert
let alert = document.getElementById("mobile-alert")

window.addEventListener('resize', function() {
    if(window.innerWidth < 600) {
        alert.style.display = "flex"
    } else {
        alert.style.display = "none"        
    }
})