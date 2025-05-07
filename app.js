function changeColor(link) {
    // Remove 'clicked' class from all links
    document.querySelectorAll(".nav-links a").forEach(el => el.classList.remove("clicked"));

    // Add 'clicked' class to the clicked link
    link.classList.add("clicked");
}

try {
    let toLandingPage = document.getElementById('to-landing-page')
toLandingPage.addEventListener('click',(e)=>{
window.location.href = './index.html'
})
} catch (error) {
    console.log('jj');
    
}


try {
    let tosignOrLogPage = document.getElementById('login-btn')
    tosignOrLogPage.addEventListener('click',(e)=>{
    window.location.href = './signup-or-login.html'
})
} catch (error) {
    console.log('ll');
    
}

