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
    
}

try {
    let toSignupPage = document.getElementById('to-signup-page')
    toSignupPage.addEventListener('click',(e)=>{
window.location.href = './signUp.html'
})
} catch (error) {
    console.log('jj');
    
}

try {
    let toLoginPage = document.getElementById('to-login-page')
    toLoginPage.addEventListener('click',(e)=>{
    window.location.href = './login.html'
})
} catch (error) {
    
}

try {
    let toIndexPage = document.getElementById('to-index-page')
    toIndexPage.addEventListener('click',(e)=>{
    window.location.href = './index.html';
        sessionStorage.setItem('fromLogin', 'true');
})
} catch (error) {
}

try {
    let toverificationPage = document.getElementById('to-verification-page')
    toverificationPage.addEventListener('click',(e)=>{
    window.location.href = './verification.html'
})
} catch (error) {
    
}


window.onload = function() {
    if (sessionStorage.getItem('fromLogin') === 'true') {
        let loginBtn = document.getElementById('login-btn');
        if (loginBtn) {
            loginBtn.remove();
            document.getElementById('btn-image-replace').innerHTML = `<p class="recoloring">Anna Liebert</p> <img src="./assets/Ellipse 12.png" alt="">`
        }
        sessionStorage.removeItem('fromLogin'); 
    }
};
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
document.getElementById("contact-num").addEventListener("input", function (event) {
    let inputValue = event.target.value.replace(`${/\D/g}`, ""); 

    // Ensure it starts with "09"
    if (!inputValue.startsWith("09")) {
        inputValue = "09"; // Force the input to begin with 09
    }

    // Limit to exactly 10 digits
    inputValue = inputValue.slice(0, 10);

    event.target.value = inputValue;
});
