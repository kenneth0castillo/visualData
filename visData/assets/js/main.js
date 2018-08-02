const random = Math.floor(Math.random()*30);

let img = data.results[random].picture.large;
let img1 = document.getElementById("img").src=img;
img1.innerHTML = `${img}`

let firstName = data.results[random].name.first;
let lastName = data.results[random].name.last;
let fullName = document.getElementById("name");
fullName.innerHTML = `${firstName} ${lastName}`

let gender = data.results[random].gender;
let gender1 = document.getElementById("Gender");
gender1.innerHTML = `${gender}`

let age = data.results[random].dob.age;
let age1 = document.getElementById("ages");
age1.innerHTML = `${age}`
 



let img2 = data.results[random].picture.large;
let img3 = document.getElementById("img").src=img2;
img3.innerHTML = `${img2}`

// let firstName = data.results[random].name.first;
// let lastName = data.results[random].name.last;
// let fullName = document.getElementById("name");
// fullName.innerHTML = `${firstName} ${lastName}`

let gender2 = data.results[random].gender;
let gender3 = document.getElementById("Gender");
gender1.innerHTML = `${gender2}`

let age2 = data.results[random].dob.age;
let age3 = document.getElementById("ages");
age3.innerHTML = `${age2}`