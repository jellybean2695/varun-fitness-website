const form = document.getElementById("registerForm");

// WhatsApp numbers of the two owners
const owners = ["919293327678", "919966426346"];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const plan = document.getElementById("plan").value;
    const level = document.getElementById("level").value;
    const time = document.getElementById("time").value;

    // Validation
    if (name === "") { alert("Please enter your full name"); return; }
    if (phone === "" || phone.length !== 10 || isNaN(phone)) { alert("Please enter a valid 10-digit phone number"); return; }
    if (plan === "") { alert("Please select a membership plan"); return; }
    if (level === "") { alert("Please select your fitness level"); return; }
    if (time === "") { alert("Please select preferred workout time"); return; }

    // Prepare WhatsApp message
    const message = encodeURIComponent(
        `New Gym Registration:\nName: ${name}\nPhone: ${phone}\nPlan: ${plan}\nLevel: ${level}\nPreferred Time: ${time}`
    );

    // Open WhatsApp links for both owners
    owners.forEach(number => {
        const url = `https://wa.me/${number}?text=${message}`;
        window.open(url, "_blank");
    });

    alert("Registration successful! WhatsApp messages opened for the owners.");

    form.reset();
});
