let students = [
    {name:'a'},
    {name:'b'},
    {name:'c'}
]

let studentsHTML = '' //create empty html variable

for(let x=0; x<students.length; x++){ //loop throught array 
    console.log(students[x].name)
    studentsHTML += `<li>${students[x].name}</li>` //fill variable
}

document.querySelector("ul").innerHTML = studentsHTML //add variable to dom
