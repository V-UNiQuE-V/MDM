// Get the button and the target section
const btn = document.getElementById('btn');
const targetSection = document.getElementById('exploreMenuSection');

// Add a click event listener to the button
btn.addEventListener('click', function() {
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Move focus out of the contact modal when it hides to avoid aria-hidden focus warning
var contactModalEl = document.getElementById('contactModal');
var contactTrigger = document.getElementById('navItem5');
if (window.jQuery && contactModalEl) {
    var $contactModal = window.jQuery(contactModalEl);
    $contactModal.on('hidden.bs.modal', function () {
        var active = document.activeElement;
        if (active && contactModalEl.contains(active)) {
            (contactTrigger || document.body).focus();
        }
    });
}


// Handle contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log({
        name: name,
        email: email,
        message: message
    });
    
    // Reset form
    contactForm.reset();

    // Close modal after submit
    if (window.jQuery && contactModalEl) {
        if (document.activeElement) {
            document.activeElement.blur();
        }
        window.jQuery(contactModalEl).modal('hide');
    }
});

// Before modal hides, ensure no focused element remains inside it
if (window.jQuery && contactModalEl) {
    var $contactModal2 = window.jQuery(contactModalEl);
    $contactModal2.on('hide.bs.modal', function () {
        var active = document.activeElement;
        if (active && contactModalEl.contains(active)) {
            active.blur();
        }
    });
}
