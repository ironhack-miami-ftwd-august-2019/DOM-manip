


// document.querySelector("body > img").onclick = function(e){
//     console.log(e)
//     if(e.target.className == 'change'){
//         e.target.className = ''
//     } else {
//         e.target.className = 'change'
//     }
//     //document.querySelector("body > img").className = 'change'

// }



document.querySelector("body > img").onclick = function(e){
    console.log(e)
    if(e.target.className.includes('change')){
        e.target.className = e.target.className.replace('change','')
    } else {
        e.target.className = e.target.className += ' change'
    }
    //document.querySelector("body > img").className = 'change'

}
