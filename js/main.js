//Functions for hiding/showing header for mobile. 
//This functionality will appear on all pages, thus why it is in "main".

//Linked button (class= open-button) will hide when page is higher than 1100px width (styling linked to @media in main.css)
function hideHeader() {
    //Establishing constant "header" to select class= mobile-menu as target
    const header = document.querySelector('.mobile-menu');
    //Constant "header" will have a style/display of "none" when hideHeader() is actively functioning
    header.style.display = 'none';
    document.querySelector('.open-button').style.display = 'block';
    //Open-button will be visible again when hideHeader() is active for when the user will want to reopen the header
}

function showHeader() {
    //Same thing as above but other away around. This is linked to an "X" in HTML that include various animation stylings in main.css to hint at functionality.
    const header = document.querySelector('.mobile-menu');
    header.style.display = 'block';
    document.querySelector('.open-button').style.display = 'none';
}