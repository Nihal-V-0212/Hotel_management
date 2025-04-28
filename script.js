// console.log("Hotel Management JS Loaded");

document.addEventListener('DOMContentLoaded', function() {

    // Add confirmation dialog to all delete forms
    const deleteForms = document.querySelectorAll('form.delete-form');

    deleteForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Get the entity name or ID if possible for a more specific message
            const entityName = form.getAttribute('data-entity-name') || 'this item';
            const confirmMessage = `Are you sure you want to delete ${entityName}? This action cannot be undone.`;

            if (!window.confirm(confirmMessage)) {
                event.preventDefault(); // Stop form submission if user clicks Cancel
            }
        });
    });

    // You can add more JavaScript interactions here:
    // - Client-side form validation (e.g., check date ranges)
    // - Dynamic filtering of tables
    // - AJAX calls for partial page updates (more advanced)

    // Example: Simple date validation for reservation form (if exists)
    const reservationForm = document.querySelector('form#reservation-form'); // Add id="reservation-form" to the form tag
    if (reservationForm) {
        const checkInInput = reservationForm.querySelector('#check_in');
        const checkOutInput = reservationForm.querySelector('#check_out');

        if (checkInInput && checkOutInput) {
            reservationForm.addEventListener('submit', function(event) {
                const checkInDate = checkInInput.value;
                const checkOutDate = checkOutInput.value;

                if (checkInDate && checkOutDate && checkOutDate <= checkInDate) {
                    alert('Check-out date must be after the Check-in date.');
                    event.preventDefault(); // Stop submission
                    checkOutInput.focus(); // Focus the incorrect field
                }
            });
        }
    }

});