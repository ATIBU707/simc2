function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const formData = {
        fullName: document.getElementById('fullName').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        level: document.getElementById('level').value,
        previousSchool: document.getElementById('previousSchool').value,
        parentName: document.getElementById('parentName').value,
        parentPhone: document.getElementById('parentPhone').value,
        documents: Array.from(document.querySelectorAll('input[name="documents"]:checked')).map(cb => cb.value)
    };

    // Display the information
    document.getElementById('displayFullName').textContent = formData.fullName;
    document.getElementById('displayDOB').textContent = formatDate(formData.dob);
    document.getElementById('displayGender').textContent = formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1);
    document.getElementById('displayEmail').textContent = formData.email;
    document.getElementById('displayPhone').textContent = formData.phone;
    document.getElementById('displayAddress').textContent = formData.address;
    document.getElementById('displayLevel').textContent = formData.level.toUpperCase();
    document.getElementById('displayPreviousSchool').textContent = formData.previousSchool;
    document.getElementById('displayParentName').textContent = formData.parentName;
    document.getElementById('displayParentPhone').textContent = formData.parentPhone;

    // Display documents
    const documentsList = document.getElementById('displayDocuments');
    documentsList.innerHTML = '';
    formData.documents.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = formatDocumentName(doc);
        documentsList.appendChild(li);
    });

    // Show the submitted information section
    document.getElementById('submittedInfo').style.display = 'block';

    // Scroll to the submitted information
    document.getElementById('submittedInfo').scrollIntoView({ behavior: 'smooth' });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatDocumentName(doc) {
    const names = {
        birthCertificate: 'Birth Certificate',
        previousResults: 'Previous School Results',
        recommendation: 'Recommendation Letter',
        photos: 'Recent Passport Photos'
    };
    return names[doc] || doc;
} 