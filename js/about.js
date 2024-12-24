const years = document.querySelector("#years");
let currentYear = new Date().getFullYear();
let numberYears = currentYear-2024+17;
years.innerHTML = `${numberYears}`;
const yearsExperience= document.querySelector("#years-experience");
let numberYearsExperience = currentYear-2024+25;
yearsExperience.innerHTML = `${numberYearsExperience}`;
