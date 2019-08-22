console.log('hello dom')

//Selector to get whatever elements you want
document.querySelector("body > h1").innerText = new Date() 


//Event listener to listen for clicks, hovers, etc. 
document.onclick = function(event) {
    document.querySelector('#star').innerText = 'this works too'
}

//Example of DOM manipulation 
// for(let i=0; i<100; i++){
//     document.getElementById("cat").append('meow')
// }


//date 
document.querySelector("body > h1:nth-child(1)").onmouseover = function() {
    //dog
    document.querySelector("body > h1:nth-child(3)").style.color = "green";
    document.querySelector("body > h1:nth-child(3)").style.fontSize = "200px";
}

document.querySelector("body > h1:nth-child(1)").onmouseout = function() {
    //dog
    document.querySelector("body > h1:nth-child(3)").style.color = "red";
    document.querySelector("body > h1:nth-child(3)").style.fontSize = "200px";
}


document.onscroll = function(event){
    console.log(document.body.scrollTop)
    //document.querySelector("body > h1").style.fontSize = document.body.scrollTop
    //document.querySelector("body > img").style
    document.querySelector("body > img").style.transform = `scale(${document.body.scrollTop/100})`
}


