document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const pages = {
        'index.html': '<h1>Welcome to Our Company</h1><p>We are a leading web development firm.</p>',
        'contact.html': `
            <h1>Contact Us</h1>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div id="form-message" style="display:none;"></div>`,
        'team.html': '<h1>Meet Our Team</h1><p>Our team is comprised of skilled professionals.</p>',
        'resources.html': `
            <h1>Resources</h1>
            <p>Here are some valuable training resources:</p>
            <div id="resource-buttons">
                <a href="#" class="resource-button">Resource 1</a>
                <a href="#" class="resource-button">Resource 2</a>
                <a href="#" class="resource-button">Resource 3</a>
            </div>`,
        'thank-you.html': `
            <h1>Thank You!</h1>
            <p>Your submission has been received. We will review your information and get back to you shortly.</p>
            <a href="index.html" class="button">Return to Homepage</a>`
    };

    function loadPage(page) {
        content.innerHTML = pages[page];
        if (page === 'contact.html') {
            setupContactForm();
        }
    }

    function setupContactForm() {
        const form = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
       
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            formMessage.style.display = 'block';
            formMessage.innerHTML = `<p>Thank you, <strong>${name}</strong>. We have received your message and will get back to you at <strong>${email}</strong> soon.</p>`;
            form.reset();
           
            
            setTimeout(() => {
                window.location.href = 'thank-you.html';
            }, 2000);
        });
    }

    const currentPage = window.location.pathname.split('/').pop();
    loadPage(currentPage);

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = e.target.getAttribute('href');
            history.pushState(null, '', page);
            loadPage(page);
        });
    });

    window.addEventListener('popstate', function () {
        const page = window.location.pathname.split('/').pop();
        loadPage(page);
    });
});


    