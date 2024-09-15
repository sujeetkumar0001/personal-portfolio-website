document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can add functionality to send the form data to a server
    alert(`Thank you for your message, ${name}!`);
    
    // Reset the form
    this.reset();
});