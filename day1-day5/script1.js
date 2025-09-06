
    // Get the button and body elements
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Add click event listener to the button
    themeToggle.addEventListener('click', function() {
      // Toggle the 'dark-mode' class on the body
      body.classList.toggle('dark-mode');
      
      // Update button text based on current mode
      if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
      } else {
        themeToggle.textContent = '🌙 Dark Mode';
      }
    });
 