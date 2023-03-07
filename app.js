//Server Code
//document.addEventListener('DOMContentLoaded', getHabits)

//Main Code
const buttonOne = document.querySelector('.one')
const buttonTwo = document.querySelector('.two')
const buttonThree = document.querySelector('.three')
const deleteButtonOne = document.querySelector(".deleteOne")
const deleteButtonTwo = document.querySelector(".deleteTwo")
const deleteButtonThree = document.querySelector(".deleteThree")
const sleepingList = document.querySelector(".sleeping")
const workoutList = document.querySelector(".workout")
const readingList = document.querySelector(".reading")
// event listner for clicking on add
buttonOne.addEventListener('click', addSleeping);
buttonTwo.addEventListener('click', addWorkout);
buttonThree.addEventListener('click', addReading);
//notdoing the events
deleteButtonOne.addEventListener('click', noSleeping)
deleteButtonTwo.addEventListener('click', noWorkout );
deleteButtonThree.addEventListener('click', noReading);
// event listener for deleting
let habitDayOne = 0;
let habitDayTwo = 0;
let habitDayThree = 0;


function addSleeping (){
    habitDayOne++;
    const sleepingDiv = document.createElement('div');
    sleepingDiv.classList.add('tracker')
    sleepingDiv.innerText = "Day " + habitDayOne
    sleepingList.appendChild(sleepingDiv)
    saveLocalSleeping(sleepingList.innerHTML)
}
function addWorkout(){
    habitDayTwo++;
    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('tracker')
    workoutDiv.innerText = "Day " + habitDayTwo
    workoutList.appendChild(workoutDiv)

}

function addReading (){
    habitDayThree++;
    const readingDiv = document.createElement('div');
    readingDiv.classList.add('tracker')
    readingDiv.innerText = "Day " + habitDayThree
    readingList.appendChild(readingDiv)

}
function noSleeping (){
    habitDayOne++;
    const sleepingDiv = document.createElement('div');
    sleepingDiv.classList.add('noTracker')
    sleepingDiv.innerText = "Day " + habitDayOne
    sleepingList.appendChild(sleepingDiv)
}
function noWorkout (){
    habitDayTwo++;
    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('noTracker')
    workoutDiv.innerText = "Day " + habitDayTwo
    workoutList.appendChild(workoutDiv)
}
function noReading (){
    habitDayThree++;
    const readingDiv = document.createElement('div');
    readingDiv.classList.add('noTracker')
    readingDiv.innerText = "Day " + habitDayThree
    readingList.appendChild(readingDiv)
}
/*
saveLocalSleeping

saveLocalWorkout
*/
/*function saveLocalSleeping (input){
    localStorage.setItem('habits',JSON.stringify(input));
}
const data = JSON.parse(localStorage.getItem('habits')).
data.forEach(
    console.log('Hello')
)
*/
// abits.forEach(function(habit){