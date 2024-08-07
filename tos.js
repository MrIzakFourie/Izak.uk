document.addEventListener('DOMContentLoaded', () => {
    const optOutButton = document.getElementById('opt-out-button');
    const acceptButton = document.getElementById('accept-button');
    const goBackButton = document.getElementById('go-back-button');
    const goBackButtonMobile = document.getElementById('go-back-button-mobile');
    const container = document.querySelector('.container');
    const mobileMessage = document.getElementById('mobile-message');

    let alle = true;

    function isMobileDevice() {
        return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {
        container.style.display = 'none';
        mobileMessage.style.display = 'block';
	alle = false
    } else {
        optOutButton.addEventListener('mouseover', moveButton);
        optOutButton.addEventListener('click', showMessage);
        acceptButton.addEventListener('click', showAcceptMessage);
    }

    if (alle === true) {
        alle = false;
        alert('Oops! It seems your finger took a little detour and opted you in! By GDPR decree, we must inform you that you can still opt-out. Just so you know, we\'re all about compliance and fairness here!');
    }

    function moveButton() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = optOutButton.getBoundingClientRect();

        // Calculate the new top and left positions within the container's bounds
        const newTop = Math.random() * (containerRect.height - buttonRect.height);
        const newLeft = Math.random() * (containerRect.width - buttonRect.width);

        optOutButton.style.position = 'absolute';
        optOutButton.style.top = `${newTop}px`;
        optOutButton.style.left = `${newLeft}px`;
    }

    function showMessage() {
        alert('This button is temporarily out of service.');
    }

    function showAcceptMessage() {
        alert('Due to GDPR, you have got to opt out before proceeding');
    }

    goBackButton.addEventListener('click', () => {
        window.location.href = 'terminal.html';
    });

    goBackButtonMobile.addEventListener('click', () => {
        window.location.href = 'terminal.html';
    });
});
