// Establishing array called contactList to make a list of names to act as "clients" leaving testimonials.

const contactList = ["Allen Riverson", "Anna Takumpo", "Dennis Godman"]

const contactTitle = ["Fanshawe Professor", "Full-Time Student", "Graduate, Graphic Designer"]


//Establishing array called contactTestimonials, which will store a long string (testimonial) and output it with the corressponding array box in contactList. 

const contactTestimonials = [
    "Outstanding work! The future of Fanshawe-born web designers is looking bright! This is a talented class, and I can't wait to see what their future holds!",
    "The Interactive Media Design program reminds me everyday why I want to get in this field! Industry Night has been an eye-opener in showing me the expectations of future clients, and the opportunity to network with people in the industry was a thrill!",
    "I remember when my dreams were just starting in the Fanshawe program! I am excited to see what this class has up their sleeves!"
]


//RNG reaching up to 3 to decide which number will be chosen between 0-2
const testimonialRandom = Math.floor(Math.random() * 3);

//Establishing constants contact, title, and testimonial to attach to the RNG function

const contact = contactList[testimonialRandom];
const title = contactTitle[testimonialRandom];
const testimonial = contactTestimonials[testimonialRandom];

//Establishing testimonialOutput to find the id "testimonialOutput" in HTML and target it
const testimonialOutput = document.getElementById("testimonialOutput");

//Establishing testimonialContant to store a string, and aspects of this string can be influenced by the outcomes of the math going on in contact, title, and testimonial.
const testimonialContent = `
    <div class="contact-box">
        <h2>${contact}</h2>
        <p>${title}</p>
        <p>${testimonial}</p>
    </div>
`;

//id=testimonialOutput will output the testimonial content within the HTML container
testimonialOutput.innerHTML = testimonialContent;