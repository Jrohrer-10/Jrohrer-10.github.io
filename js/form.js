document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.querySelector('[name="name"]').value,
      email: document.querySelector('[name="email"]').value,
      phone: document.querySelector('[name="phone"]').value,
      message: document.querySelector('[name="message"]').value,
    };

    try {
      const response = await fetch("https://formspree.io/f/xgvkvvky", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        form.reset();
        successMessage.classList.remove("d-none", "fade-out");
        successMessage.classList.add("fade", "show");

        setTimeout(() => {
          successMessage.classList.remove("show");
          successMessage.classList.add("fade-out");
        }, 5000);
      } else {
        alert("Error: Submission failed.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  });
});
