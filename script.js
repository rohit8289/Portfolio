// var startPosition = 0;

// var education = document.getElementById("education");

// var co = education.getBoundingClientRect();
// console.log(co);

// var endPosition = 2638.02099609375;

// var section = document.getElementById("edu");

// section.addEventListener('click',function(event){
//     event.preventDefault;
//     if(startPosition >= endPosition){
//         clearInterval(section);
//         return;
//     }
//     startPosition+=50;
//     window.scrollBy(0,50);
// },50);

// FOR SMOOTH SCROLL ANIMATION

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var Interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        // console.log(targetSectionId);
        var targetSection = document.getElementById(targetSectionId);
        // console.log(targetSection);

        Interval = setInterval(scrollVertically, 20, targetSection);
    });
}

function scrollVertically(targetSection) {
    var targetSectionCoordiates = targetSection.getBoundingClientRect();

    if (targetSectionCoordiates.top <= 0) {
        clearInterval(Interval);
        return;
    }
    window.scrollBy(0, 50);
}


// FOR DISPLAYING SKILL ANIMATION FOR ALL SKILL AT ONCE

// // var allSkills = document.querySelectorAll(".skill-name span");
// // console.log(allSkills);
// var progressBars = document.querySelectorAll(".skill-progress > div");
// // console.log(progressBars);
// // var skillSection = document.getElementsByClassName('skills-display');
// var skillSection = document.getElementById('skills');
// // console.log(skillSection);
// var animationDone = false;
// window.addEventListener('scroll',checkScroll);


// function initialiseBars(){
//     // for(var i = 0; i < progressBars.length; i++){        //Both way Correct
//     //     progressBars[i].style.width = 0 + '%';
//     // }

//     for(let bar of progressBars){
//         bar.style.width = 0 + '%';
//     }
// }

// initialiseBars();

// function fillBars(){
//     for (let bar of progressBars) {
//         let targetWidth = bar.getAttribute('data-value');
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth > targetWidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//         bar.style.width = currentWidth + '%';
//         },5);
//     }
// }

// function checkScroll(){
//     var coordinates = skillSection.getBoundingClientRect();
//     console.log(coordinates);
//     if(!animationDone && coordinates.top <= window.innerHeight){
//         animationDone = true;
//         // console.log('Skill section visited')
//         fillBars();
//     }
//     else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//     }
// }

// // for(var i = 0; i < allSkills.length; i++){
// //     var skillMeter = this.getAttribute(data-value);
// //     allSkills[i].setInterval(function(event){
// //         // event.preventDefault;

// //     });
// // }

// For displaying animation when that skill appear

var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-value");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            console.log(barCoordinates);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);