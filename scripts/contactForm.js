document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            
            // Check required fields
            const name = formData.get("name").trim();
            const email = formData.get("email").trim();
            const message = formData.get("message").trim();

            if (!name || !email || !message) {
                alert("All fields are required.");
                return;
            }

            try {
                // Send form data via Netlify's form submission handler
                const response = await fetch("/", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    alert("Message sent successfully! ✅");
                    form.reset();
                } else {
                    alert("Something went wrong. Please try again. ❌");
                }
            } catch (error) {
                console.error("Submission error:", error);
                alert("Network error. Please check your connection.");
            }
        });
    }
});
