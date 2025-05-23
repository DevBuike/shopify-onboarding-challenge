// Your javascript goes here

const pricingBox = document.querySelector(".pricing-box");
const closeBtn = document.querySelector(".pricing-box span svg");


const notification = document.querySelector(".notif-wrap");
const notifBox = document.querySelector(".dropdown")
const adminPanel = document.querySelector("#admin-menu");
const dropAdmin = document.querySelector(".admin-panel")


const stepsWrap = document.querySelector("#steps");
const arrowBtn = document.querySelector(".arrow");

const searchText = document.querySelector(".search-text");
const searchBar = document.querySelector(".search-bar");


// Funcion block to toggle alert dropdown..

function closeNotif() {
    if (notifBox.style.display === "block") {
        notifBox.style.display = "none";
    } else {
        notifBox.style.display = "block";
    }
    if (dropAdmin.style.display === "block") {
            dropAdmin.style.display = "none";
    } 
};


// Function block to toggle admin dropdown..

function closeAdmin() {
    if (dropAdmin.style.display === "block") {
        dropAdmin.style.display = "none";
    } else {
        dropAdmin.style.display = "block";
    }
    if (notifBox.style.display === "block") {
        notifBox.style.display = "none";
    } 
};


// calling the alert dropdown, admin dropdown and pricing box functions..

notification.addEventListener("click", closeNotif);
adminPanel.addEventListener("click", closeAdmin);

closeBtn.addEventListener("click", () => {
    pricingBox.style.display = "none";
});


// Hidding and displaying the steps in setup guide by clicking the arrow..
const svg1 = document.querySelector("#svg1");
const svg2 = document.querySelector("#svg2");

arrowBtn.addEventListener("click", () => {
    stepsWrap.classList.toggle("hidden-content");
    svg();
});

function svg() {
    if (stepsWrap.classList === "hidden-content") {
        svg1.style.transform = "rotate(180deg)";
        
    }
    svg1.style.display = "block";
    
}



// Collapsing the steps elements..


const stepsGuide = document.getElementsByClassName("steps");
const h4Btn = document.getElementsByClassName("content-btn");
function accordion() {
    for (let i = 0; i < h4Btn.length; i++) {
        h4Btn[i].addEventListener("click", function () {

            var contentWrap = this.nextElementSibling;
            if (contentWrap.style.maxHeight) {
                contentWrap.style.maxHeight = null;
            } else {
                let active = document.querySelectorAll(".steps .active");
                for (let k = 0; k < active.length; k++) {
                    active[k].classList.remove("active");
                    active[k].nextElementSibling.style.maxHeight = null;
                }
                this.classList.toggle("active");
                contentWrap.style.maxHeight = contentWrap.scrollHeight + "px";
            }
        });
    }
}

accordion();




// Updating the counter and progress bar when inputs are checked

function checkedBox() {
  const checkBoxes = document.querySelectorAll(".checkbox");
    const progressBar = document.querySelector("#inner-bar");
  const progress = document.querySelector("#progress-count");
  const checklistProgressInterval = 100 / checkBoxes.length;
    let width = 0;
    let progressCount = 0;
  
  for(let i = 0; i < checkBoxes.length; i++){
    if(checkBoxes[i].checked){
        width += checklistProgressInterval;
        progressCount += 1;
        
    }
  }
    progress.textContent = `${progressCount} `;
    progressBar.style.width = `${width}%`;
}




// *pheeewww...
// second project i worked on since i started frontend development..
//first project i'm implementing js..
//i'm currently into my js course and this project provided me a good opportunity to practice the few i've learnt so far..

//THANK YOU FOR THIS PROJECT CHIEF FRANTZ!

// Design recreated with so much love and passion, @DevBuike..