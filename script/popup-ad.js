// Popup Ad Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set timeout for 30 seconds (30000 milliseconds)
    setTimeout(function() {
        showPopupAd();
    }, 3000);
});

function showPopupAd() {
    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-ad-container';
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-ad-content';
    
    // Create close button
    const closeButton = document.createElement('span');
    closeButton.className = 'popup-ad-close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popupContainer);
    });
    
    // Create ad content
    const adContent = document.createElement('div');
    adContent.className = 'popup-ad-body';
    adContent.innerHTML = `
        <div class="popup-ad-header">
            <h2>Special Offer from Mountains of Moons University</h2>
        </div>
        <div class="popup-ad-image">
            <img src="../images/logo.jpeg" alt="Mountains of Moons University">
            <img src="../images/cropped-logo.png" alt="Sam Iga Memorial College">
        </div>
        <div class="popup-ad-text">
            <p>Discover excellence in education at Mountains of Moons University!</p>
            <p>We offer a wide range of programs designed to prepare you for success in your chosen field.</p>
            <p>Apply now and receive a special scholarship opportunity!</p>
        </div>
        <div class="popup-ad-button">
            <a href="https://mmu.ac.ug/" target="_blank" class="popup-ad-link">Visit Mountains of Moons University</a>
        </div>
    `;
    
    // Assemble popup
    popupContent.appendChild(closeButton);
    popupContent.appendChild(adContent);
    popupContainer.appendChild(popupContent);
    
    // Add to body
    document.body.appendChild(popupContainer);
    
    // Add event listener to close when clicking outside
    popupContainer.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            document.body.removeChild(popupContainer);
        }
    });
} 