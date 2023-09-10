// Establishing array called contactList to make a list of names to act as "clients" leaving testimonials.

const contactList = ["Allen Riverson", "Anna Takumpo", "Dennis Godman"]

const contactTitle = ["Fanshawe Professor", "Full-Time Student", "Graduate, Graphic Designer"]


//Establishing array called contactTestimonials, which will store a long string (testimonial) and output it with the corressponding array box in contactList. 
// It is assumed that I will be getting the testimonials from the "contact us" page, and will structure the contact us page to fit the information given on the testimonials 
//But since that's not asked, and since I don't have time to research or think of a system, I will not be building that functionality and just use pre-made testimonials

const contactTestimonials = [
    "Outstanding work! The future of Fanshawe-born web designers is looking bright! This is a talented class, and I can't wait to see what their future holds!",
    "The Interactive Media Design program reminds me everyday why I want to get in this field! Industry Night has been an eye-opener in showing me the expectations of future clients, and the opportunity to network with people in the industry was a thrill!",
    "I remember when my dreams were just starting in the Fanshawe program! I am excited to see what this class has up their sleeves!"
]

const testimonialRandom = Math.floor(Math.random() * 3);

const contact = contactList[testimonialRandom];
const title = contactTitle[testimonialRandom];
const testimonial = contactTestimonials[testimonialRandom];

const testimonialOutput = document.getElementById("testimonialOutput");

const testimonialContent = `
    <div class="contact-box">
        <h2>${contact}</h2>
        <p>${title}</p>
        <p>${testimonial}</p>
    </div>
`;

testimonialOutput.innerHTML = testimonialContent;