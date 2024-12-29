
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})


document.getElementById('downloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'images/resume.pdf'; 
    link.download = 'Vignesh_Balusamy_Resume.pdf'; 
    link.click();
});


emailjs.init("dweDSqW0NTPNKs7cW"); 

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs.send("service_ec3nnfo", "template_ho4cuuf", {
        to_name: name,
        from_name: email,
        message: message,
		reply_to: email
    })
    .then((response) => {
        document.getElementById("statusMessage").textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    })
    .catch((error) => {
        document.getElementById("statusMessage").textContent = "Failed to send the message. Please try again.";
        console.error("Error:", error);
    });
});


// Get all the modal elements and the close button
const modals = document.querySelectorAll('.modal-overlay');
const viewMoreButtons = document.querySelectorAll('.view-more');
const closeButtons = document.querySelectorAll('.close');

// Function to open the modal
viewMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const targetModal = document.querySelector(button.getAttribute('data-target'));
        targetModal.style.display = 'flex';
    });
});

// Function to close the modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});

// Close the modal if the user clicks outside of it
modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


