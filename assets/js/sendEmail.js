// Source code is from Code Institute Walkthrough Project

function sendMail(contactForm) {
    emailjs.send("monochrome","monochrome", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            
            // Display feedback upon successful submission
            feedBack();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

// Let user know that they have succesfully completed the form

function feedBack() {
    alert("Thank you for your message!");
}

