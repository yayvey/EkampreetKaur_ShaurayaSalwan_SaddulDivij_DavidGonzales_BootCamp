//Functions for hiding/showing header for mobile

function hideHeader() {
    const header = document.querySelector('.mobile-menu');
    header.style.display = 'none';
    document.querySelector('.open-button').style.display = 'block';
}

function showHeader() {
    const header = document.querySelector('.mobile-menu');
    header.style.display = 'block';
    document.querySelector('.open-button').style.display = 'none';
}