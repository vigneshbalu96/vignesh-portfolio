
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

