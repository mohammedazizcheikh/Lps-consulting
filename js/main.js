(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


  
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

function copyWhatsAppNumber() {
    const whatsappNumber = "+21694359613"; // Replace with your WhatsApp number
    navigator.clipboard.writeText(whatsappNumber).then(function() {
      alert("WhatsApp number copied: " + whatsappNumber);
    }, function(err) {
      console.error("Could not copy text: ", err);
    });
  }
  function openWhatsApp() {
    // WhatsApp number (with country code but no "+" or spaces)
    var phoneNumber = "24761044"; 
    // Message to pre-fill
    var message = "Hello, I'd like to chat with you!";
    // Create WhatsApp URL
    var url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Open the URL in a new tab
    window.open(url, '_blank');
  }

// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
        // Change the image source when scrolling past 45px
        $('.logohead').attr('src', './img/logo.png');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
        // Reset the image source when scrolling back
        $('.logohead').attr('src', './img/lps white.png');
    }
});

function sendEmail() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Construct the Gmail URL with the pre-filled email content
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lps.consulting1@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Open Gmail in the browser with the pre-filled content
    window.open(gmailLink, '_blank');
}
function showToast(message) {
    var toast = document.getElementById("toast");
    var toastMessage = document.getElementById("toast-message");
    toastMessage.textContent = message; // Set the message for the toast
    toast.className = "toast show"; // Add "show" class to display the toast

    // Hide the toast after 3 seconds
    setTimeout(function() {
        toast.className = toast.className.replace("show", ""); // Hide the toast
    }, 3000);
}

function sendEmailCondidat() {
    // Get form field values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postal-code').value;
    const nationality = document.getElementById('nationality').value;
    const jobType = document.getElementById('job-type').value;
    const additionalInfo = document.getElementById('additional-info').value;

    // Check if any field is empty and show a toast if so
    if (!firstName || !lastName || !email || !phoneNumber) {
        showToast("Please fill in all required fields.");
        return false;
    }

    // Get the file input element and check if a file is selected
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];

    // Construct the message body with form data
    let messageBody = `
        First Name: ${firstName}\n
        Last Name: ${lastName}\n
        Phone Number: ${phoneNumber}\n
        Email Address: ${email}\n
        Street: ${street}\n
        City: ${city}\n
        State/Region: ${state}\n
        Postal Code: ${postalCode}\n
        Nationality: ${nationality}\n
        Job Type: ${jobType}\n
        Additional Information: ${additionalInfo}\n
    `;

    // Encode message body and create Gmail link
    const subject = encodeURIComponent("Job Application Submission");
    const body = encodeURIComponent(messageBody);

    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lps.consulting1@gmail.com&su=${subject}&body=${body}`;

    // If file is selected, inform the user that they need to attach the file manually
    if (file) {
        showToast("Please manually attach the selected file after the email window opens.");
    }

    // Open Gmail with pre-filled form data (email body) in a new window
    window.open(gmailLink, '_blank');

    // Optionally show a toast for successful form submission
    showToast("Job application submitted! Please check your email.");
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function sendEmailCompany() {
    // Get form field values
    const companyName = document.getElementById('company-name').value;
    const contactName = document.getElementById('contact-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const jobType = document.getElementById('job-type').value;
    const jobTitle = document.getElementById('job-title').value;
    const additionalInfo = document.getElementById('additional-info').value;

    // Check if any required field is empty and show a toast if so
    if (!companyName || !contactName || !email || !phoneNumber) {
        showToast("Please fill in all required fields.");
        return false;
    }

    // Construct the message body with form data
    let messageBody = `
        Company Name: ${companyName}\n
        Contact Name: ${contactName}\n
        Phone: ${phoneNumber}\n
        Email: ${email}\n
        Job Type: ${jobType}\n
        Job Title: ${jobTitle}\n
        Additional Information: ${additionalInfo}\n
    `;

    // Encode message body and create Gmail link
    const subject = encodeURIComponent("Company Job Application Submission");
    const body = encodeURIComponent(messageBody);

    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lps.consulting1@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail with pre-filled form data (email body) in a new window
    window.open(gmailLink, '_blank');

    // Optionally show a toast for successful form submission
    showToast("Job application submitted! Please check your email.");
}

// Helper function for displaying toast notifications
function showToast(message) {
    alert(message);  // You can replace this with a more sophisticated toast library
}