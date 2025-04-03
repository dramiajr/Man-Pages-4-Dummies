document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Function
  const sidebar = document.querySelector(".sidebar");
  const showSB = document.querySelector("#showSB");
  const closeSB = document.querySelector("#closeSB");

  showSB.addEventListener("click", function (event){
    event.stopPropagation();
    sidebar.classList.toggle("active");
  });

  closeSB.addEventListener("click", function (event){
    event.stopPropagation();
    sidebar.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !showSB.contains(event.target)) {
        sidebar.classList.remove("active");
      }
  });
});
  
// Terminal Window
function typeIt(textarea, event) {
  var txtInput = document.getElementById('txtInput');
  var userTyping = document.getElementById('userTyping');
  var inputTxt = txtInput.value;
  userTyping.textContent = inputTxt;   
}

function moveIt(length, event) {
  var cursor = document.getElementById('cursor');
  var userTyping = document.getElementById('userTyping');
  cursor.parentNode.appendChild(cursor);
}

// Pre Banner
function displayBanner() {
  const bannerTxt = document.getElementById('banner');
  if (window.banner){
  bannerTxt.textContent = window.banner.join("\n");
  } else {
    console.error("Banner Not Found");
  }
}

window.onload = displayBanner;
  

function command(cmd){
    switch (cmd.toLowerCase()){
        case 'help':
            help;
            break;
        case 'ls':
            ls;
            break;
        case 'cd':
            cd;
            break;
        case 'cat':
            cat;
            break;
        case 'clear':
            clear;
            break;
    }
}