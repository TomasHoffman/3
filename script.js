// JavaScript for form validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        // Validate inputs
        let valid = true;

        // Example validation: Name must not be empty
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            valid = false;
        } else {
            removeError(nameInput);
        }

        // Additional validation logic can be added for other fields
        
        // If all validations pass, submit the form
        if (valid) {
            form.submit();
        }
    });

    // Function to show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) {
            error.textContent = message;
        } else {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = message;
            formGroup.appendChild(errorMessage);
        }
        formGroup.classList.add('error');
    }

    // Function to remove error message
    function removeError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) {
            formGroup.removeChild(error);
        }
        formGroup.classList.remove('error');
    }
});
