var btn = document.getElementById('next');
var next_page = document.getElementById('container-profile');
var container = document.getElementById('container');
  
function nextBtn() {
    if (next_page.style.display === "none") {
        next_page.style.display = "block";
        container.style.display = "none";
        next_page.classList.add = ('active');
    } else {
        next_page.style.display = "none";
        container.style.display = "block";
        next_page.classList.remove = ('active');
    }
};