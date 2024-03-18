

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


// End Services