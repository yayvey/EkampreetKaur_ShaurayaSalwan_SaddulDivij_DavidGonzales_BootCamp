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

// Establishing an array called studentList to make an example array list holding 10 values made from some database. 
//"Database" used was student list for teams. 
// I know there is a way to use a .txt file to automate populating an array but I... gave up and just manually called 10 names instead.
const studentList = ["Dan Singer", "Sophia Westrop", "Juliette Thomson", "Ethan Wall", "Callidora Idsardi", "Xaviere Hanbury", "Jasmine Chicoine", "Lalaine Siy", "Rebin Reji", "Haem Hariharan Rajeswari Sekar", "Ekampreet Kaur", "Shaurya Salwan", "Saddul Divij", "David Gonzales"];

//console.log(studentList);



