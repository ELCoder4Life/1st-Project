let sleepingHabitSaved = [];
let workoutHabitSaved = [];
let readingHabitSaved = [];
//Server Code
document.addEventListener('DOMContentLoaded', getSleepingHabits)
document.addEventListener('DOMContentLoaded', getWorkoutHabits)
document.addEventListener('DOMContentLoaded', getReadingHabits)

//Main Code
const buttonOne = document.querySelector('.one')
const buttonTwo = document.querySelector('.two')
const buttonThree = document.querySelector('.three')
const deleteButtonOne = document.querySelector(".deleteOne")
const deleteButtonTwo = document.querySelector(".deleteTwo")
const deleteButtonThree = document.querySelector(".deleteThree")
const sleepingList = document.querySelector(".sleepingDiv")
const workoutList = document.querySelector(".workoutDiv")
const readingList = document.querySelector(".readingDiv")
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
    saveLocalSleeping( "tracker")
}
function addWorkout(){
    habitDayTwo++;
    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('tracker')
    workoutDiv.innerText = "Day " + habitDayTwo
    workoutList.appendChild(workoutDiv)
    saveLocalWorkout("tracker")

}

function addReading (){
    habitDayThree++;
    const readingDiv = document.createElement('div');
    readingDiv.classList.add('tracker')
    readingDiv.innerText = "Day " + habitDayThree
    readingList.appendChild(readingDiv)
    saveLocalReading( "tracker")

}
function noSleeping (){
    habitDayOne++;
    const sleepingDiv = document.createElement('div');
    sleepingDiv.classList.add('noTracker')
    sleepingDiv.innerText = "Day " + habitDayOne
    sleepingList.appendChild(sleepingDiv)
    saveLocalSleeping("noTracker")
}
function noWorkout (){
    habitDayTwo++;
    const workoutDiv = document.createElement('div');
    workoutDiv.classList.add('noTracker')
    workoutDiv.innerText = "Day " + habitDayTwo
    workoutList.appendChild(workoutDiv)
    saveLocalWorkout("noTracker")
}
function noReading (){
    habitDayThree++;
    const readingDiv = document.createElement('div');
    readingDiv.classList.add('noTracker')
    readingDiv.innerText = "Day " + habitDayThree
    readingList.appendChild(readingDiv)
    saveLocalReading("noTracker")
}

function saveLocalSleeping (input){
    sleepingHabitSaved.push(input);
    localStorage.setItem('sleepingHabit', sleepingHabitSaved)
}
function saveLocalWorkout (input){
    workoutHabitSaved.push(input);
    localStorage.setItem('workoutHabit', workoutHabitSaved)
}

function saveLocalReading (input){
    readingHabitSaved.push(input);
    localStorage.setItem('readingHabit', readingHabitSaved)
}


function getSleepingHabits (){
    let sleepingHabitStored = localStorage.getItem('sleepingHabit')
    if (sleepingHabitStored !== null){
        let sleepingHabit = sleepingHabitStored.split(",")
    habitDayOne = sleepingHabit.length;
    sleepingHabit.forEach(function(currentValue, index){
        if(currentValue === "tracker"){
            const sleepingDiv = document.createElement('div');
            sleepingDiv.classList.add('tracker')
            let currentDay = index + 1;
            sleepingDiv.innerText = "Day " + currentDay
            sleepingList.appendChild(sleepingDiv)
        }
        else{
            const sleepingDiv = document.createElement('div');
            sleepingDiv.classList.add('noTracker')
            let currentDay = index + 1;
            sleepingDiv.innerText = "Day " + currentDay
            sleepingList.appendChild(sleepingDiv)

        }
        sleepingHabitSaved = sleepingHabit;
    })
    }
}
function getWorkoutHabits (){
    let workoutHabitStored = localStorage.getItem('workoutHabit')
    if (workoutHabitStored !== null){
        let workoutHabit = workoutHabitStored.split(',')
    habitDayTwo = workoutHabit.length;
    workoutHabit.forEach(function(currentValue, index){
        if(currentValue === "tracker"){
            const workoutDiv = document.createElement('div');
            workoutDiv.classList.add('tracker')
            let currentDay = index + 1;
            workoutDiv.innerText = "Day " + currentDay
            workoutList.appendChild(workoutDiv)
        }
        else{
            const workoutDiv = document.createElement('div');
            workoutDiv.classList.add('noTracker')
            let currentDay = index + 1;
            workoutDiv.innerText = "Day " + currentDay
            workoutList.appendChild(workoutDiv)

        }
        workoutHabitSaved = workoutHabit;
    })
    }
}
function getReadingHabits (){
    let readingHabitStored = localStorage.getItem('readingHabit')
    if (readingHabitStored !== null){
    let readingHabit = readingHabitStored.split(',')
    habitDayThree = readingHabit.length;
    readingHabit.forEach(function(currentValue, index){
        if(currentValue === "tracker"){
            const readingDiv = document.createElement('div');
            readingDiv.classList.add('tracker')
            let currentDay = index + 1;
            readingDiv.innerText = "Day " + currentDay
            readingList.appendChild(readingDiv)
        }
        else{
            const readingDiv = document.createElement('div');
            readingDiv.classList.add('noTracker')
            let currentDay = index + 1;
            readingDiv.innerText = "Day " + currentDay
            readingList.appendChild(readingDiv)

        }
        readingHabitSaved = readingHabit;
    })
}
}
/*
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