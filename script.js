"use strict";
const button = document.querySelector('.skillButton');
const skills = document.querySelector('.skills ul');
button.addEventListener("click", () => {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'flex';
        button.textContent = 'Hide Skills';
    }
    else {
        skills.style.display = 'none';
        button.textContent = 'Show Skills';
    }
});
