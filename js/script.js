

/*Global variables*/

/* Global variables */

// console.log(navChilds);

/* Start Navbar */
const navSvgs = Array.from(document.querySelectorAll('.nav-anchor'));


function navSvgsActive() {


    navSvgs.forEach((svg, index) => {
        svg.onmouseover = function () {
            this.setAttribute('fill', '#1DBF73');
            this.style.color = "#1DBF73";
            this.classList.remove('nav-inactive')
            setChildFill(this, '#1DBF73');
        }

        svg.onmouseleave = function () {
            this.setAttribute('fill', '#C3C5C8');
            this.classList.add('nav-inactive')
            setChildFill(this, '#C3C5C8');
        }

    })
}
function setChildFill(element, color) {
    const childElements = element.querySelectorAll('*');
    childElements.forEach(child => {
        child.setAttribute('fill', color);

    });
}
navSvgsActive();

// Prototype for real time counter

let notifCount = 1;
let intervalVar;
let notifCountEle = Array.from(document.querySelectorAll('.notif-count'));
function notifCounter() {
    intervalId = setInterval(() => {
        notifCountEle.forEach((ele, index) => {
            if (notifCount >= 20) {
                clearInterval(intervalId);
                ele.innerHTML = `${notifCount}+`; // Clear the interval when count reaches 20
            } else {
                notifCount++;
                ele.innerHTML = notifCount;
            }

            ele.parentElement.addEventListener('click', () => {
                clearInterval(intervalId);
                ele.innerHTML = '';
            })
        })
    }, 1500);
}
notifCounter();




/* End Navbar */


// Start Services
// const selector = Array.from(document.querySelectorAll('.selector')); // converting from NodeList to array
// const selectAllBtn = document.querySelector('.select-all');



// selectAllBtn.addEventListener('click', () => {
//     selector.map((ele) => ele.checked = true)
// })


const checkDiv = Array.from(document.querySelectorAll('.check-div'));
const selectAll = document.querySelector('.select-all')


checkDiv.map((ele) => {
    ele.addEventListener('click', () => {
        ele.classList.toggle('dummy-active')
    })
})

selectAll.addEventListener('click', () => {
    checkDiv.map((ele) => {
        ele.classList.add('dummy-active')
    })
})



// End Services



// Start Purchase

// End Purcahse


// Start Ratings
// const ratingStars = Array.from(document.querySelectorAll('.rating-star path'));

// const ratingStars = Array.from(document.querySelectorAll('.rating-star path'));

// let rateCount = 0;

// ratingStars.forEach((ele, index) => {
//     ele.addEventListener('click', () => {
//         // Set fill color for clicked star and all stars before it
//         for (let i = 0; i <= index; i++) {
//             if (i <= index) {
//                 ratingStars[i].setAttribute('fill', '#FFCB31');
//             }
//         }
//         // Set fill color for stars after the clicked star
//         for (let j = index + 1; j < ratingStars.length; j++) {
//             ratingStars[j].setAttribute('fill', '#E6EAEF');
//         }

//         // Update rateCount to reflect the clicked rating
//         rateCount = index + 1;
//         console.log("Rating: " + rateCount);
//     });
// });
// Function to handle the functionality for each set of stars
// function handleStars(stars) {
//     let rateCount = 0;

//     stars.forEach((star, index) => {
//         star.addEventListener('click', () => {
//             // Set fill color for clicked star and all stars before it
//             for (let i = 0; i <= index; i++) {
//                 if (i <= index) {
//                     stars[i].setAttribute('fill', '#FFCB31');
//                 }
//             }
//             // Set fill color for stars after the clicked star
//             for (let j = index + 1; j < stars.length; j++) {
//                 stars[j].setAttribute('fill', '#E6EAEF');
//             }

//             // Update rateCount to reflect the clicked rating
//             rateCount = index + 1;
//             console.log("Rating: " + rateCount);
//         });
//     });
// }

// Find all sections with class containing 'd-flex' and 'align-items-center'
const sections = document.querySelectorAll('.d-flex.align-items-center');

// Iterate over each section and apply the functionality to its stars
sections.forEach(section => {
    const stars = Array.from(section.querySelectorAll('.rating-star'));
    handleStars(stars);
});






// function rateCounter() {
//     ratingStars.filter(ele => {
//         if (ele.getAttribute('fill') === '#FFCB31') {
//             console.log("Number of times condition is true:", rateCount);
//             return true; // Include the element in the filtered array
//         } else {
//             return false; // Exclude the element from the filtered array
//         }


//     });
// }











// End Ratings