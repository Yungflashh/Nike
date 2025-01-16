
    // 1. First, grab all the boxes
    const boxes = document.querySelectorAll('.box');

    // 2. Create a function that checks if a box is in the viewport
    function checkBoxes() {
        const triggerBottom = window.innerHeight * 0.9; 
        // 0.8 means 80% down the page
        
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            // This finds out how far each box is from the top of the screen
            
            if (boxTop < triggerBottom) {
                box.classList.add('show');
                // If the box is in the viewport, show it!
            } else {
                box.classList.remove('show');
                // If not, keep it hidden
            }
        });
    }

    // 3. Run the checkBoxes function when the page is scrolled
    window.addEventListener('scroll', checkBoxes);

    // 4. Run checkBoxes right away to show boxes already in view
    checkBoxes();


  
// let number = Number (prompt("ENTER A NUMBER:"));

// let answer = number < 0 ? `${number} is a negative number` : `${number} is a positive number`;

// alert (answer);

// let number = Number (prompt("ENTER A NUMBER:"));

// let answer = number % 2 === 0 ? `${number} is a even number` : `${number} is a odd number`;

// alert (answer);
document.addEventListener("DOMContentLoaded", () => {
    const slideInElements = document.querySelectorAll('.left-slide');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            } else {
                entry.target.classList.remove('slide-in');
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    slideInElements.forEach(element => {
        observer.observe(element);
    });
});


// Right slide 


document.addEventListener("DOMContentLoaded", () => {
    const slideInElements = document.querySelectorAll('.right-slide');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            } else {
                entry.target.classList.remove('slide-in');
            }
        });
    }, { threshold: 0.1 });

    slideInElements.forEach(element => {
        observer.observe(element);
    });
});


