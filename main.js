let c = 0;
window.addEventListener('blur', ()=>{
    console.log('minimised')
    c = c+1;
    document.getElementsByClassName('head')[0].innerHTML = "<h2>minimised </h2>"+ c + " times"
})

// if (document.hidden) {
//     alert('minimised')
// }