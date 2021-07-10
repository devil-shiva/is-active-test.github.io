window.addEventListener('blur', ()=>{
    console.log('minimised')
    document.getElementsByClassName('head')[0].innerHTML = "minimised"
})

if (document.hidden) {
    alert('minimised')
}