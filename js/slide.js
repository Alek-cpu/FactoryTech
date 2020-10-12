const mobileMnu = document.querySelector(".mobileMnu");
const open = document.querySelector(".open");
const exit = document.querySelector(".exit");

open.addEventListener('click', toggleChecked);
exit.addEventListener('click', toggleChecked);


function toggleChecked (e) {
    mobileMnu.classList.toggle('show');
}