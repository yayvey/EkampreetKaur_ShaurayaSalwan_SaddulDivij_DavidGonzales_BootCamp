// Establishing an array called studentList to make an example array list holding 10 values made from some database. 
//"Database" used was student list for teams. 
// I know there is a way to use a .txt file to automate populating an array but I... gave up and just manually called 10 names instead.
//This array will store an example list of students, and dedicate the output to a container which will then randomly generate as a "student showcase", urging you to visit their portfolio
const studentList = ["Dan Singer", "Sophia Westrop", "Juliette Thomson", "Ethan Wall", "Callidora Idsardi", "Xaviere Hanbury", "Jasmine Chicoine", "Lalaine Siy", "Rebin Reji", "Haem Hariharan Rajeswari Sekar", "Ekampreet Kaur", "Shaurya Salwan", "Saddul Divij", "David Gonzales"];

//RNG reaching up to length of studentList to decide which number will be chosen between 0-9 (1-10)
const studentRandom = Math.floor(Math.random() * studentList.length);

//Calling selectedStudent to store the value found from calling the RNG math
const selectedStudent = studentList[studentRandom];

//Calling showcaseString to output a string that gives context to which student is appearing in the Student Showcase
const showcaseString = `Check out ${selectedStudent}'s portfolio!`;

//outputElement finds the id=studentOutput
const outputElement = document.getElementById("studentOutput");

//outputElement then changes the text content of studentOutput to show whatever is decided by showcaseString
outputElement.textContent = showcaseString;

