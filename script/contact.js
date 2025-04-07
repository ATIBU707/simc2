function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Display the information
    document.getElementById('displayContactName').textContent = formData.fullName;
    document.getElementById('displayContactEmail').textContent = formData.email;
    document.getElementById('displayContactPhone').textContent = formData.phone;
    document.getElementById('displayContactSubject').textContent = formatSubject(formData.subject);
    document.getElementById('displayContactMessage').textContent = formData.message;

    // Show the submitted information section
    document.getElementById('submittedContactInfo').style.display = 'block';

    // Scroll to the submitted information
    document.getElementById('submittedContactInfo').scrollIntoView({ behavior: 'smooth' });

    // Reset the form
    document.getElementById('contactForm').reset();
}

function formatSubject(subject) {
    const subjects = {
        general: 'General Inquiry',
        admission: 'Admission',
        fees: 'Fees & Payments',
        feedback: 'Feedback',
        other: 'Other'
    };
    return subjects[subject] || subject;
} 