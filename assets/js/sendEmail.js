/* EmailJS SMTP Server Details*/
function sendMail(contactForm) {
    emailjs.send("blacknight", "template_X510oNUx", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.requestsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("SUCCESS - Your Message Has Been Sent");
        },
        function(error) {
            console.log("FAILED", error);
            alert("FAILED - Your Message Has Not Been Sent");
        }
    );
    return false;  // To block from loading a new page
}

