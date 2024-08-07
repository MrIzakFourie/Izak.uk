window.onload = function() {
    var contactWindow = document.getElementById('contact-window');
    var contactText = document.getElementById('contact-text');
    var contactBack = document.getElementById('Back');
    var goBackButton = document.getElementById('go-back-button');

    // Animate the div window thingy
    contactWindow.style.opacity = 1;
    contactWindow.style.transform = 'translateY(0)';

    // Animates the text and makes it appear in
    contactText.style.opacity = 1;
    contactText.style.transform = 'translateX(0)';
    contactBack.style.opacity = 1;
    contactBack.style.transform = 'translateX(0)';
    
    setTimeout(function() { //adds a delay on not only the back button, but the ability to click it!
        goBackButton.style.opacity = 1;
        goBackButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        }); //I am aware I could do this in the HTML, but having it out of the way is nicer and I need to improve my Javascript

    }, 1250);
};
