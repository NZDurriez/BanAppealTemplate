document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("qp-form");
  const output = document.getElementById("output");
  const outputContainer = document.getElementById("output-container");
  const copyBtn = document.getElementById("copy-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const ingameName = document.getElementById("ingame-name").value.trim();
    const discord = document.getElementById("discord").value.trim();
    const appealDate = document.getElementById("appeal-date").value.trim();
    const banId = document.getElementById("ban-id").value.trim();
    const ticketId = document.getElementById("ticket-id").value.trim();
    const outcome = document.getElementById("outcome").value.trim();
    const staffMember = document.getElementById("staff-member").value.trim();
    const notes = document.getElementById("notes").value.trim();
    const loggedTx = document.getElementById("logged-tx").value;

    const result = `
**Ingame Name:** ${ingameName}
**Discord:** ${discord}
**Date of Appeal:** ${appealDate}
**Ban ID & Reason:** ${banId}
**Ticket ID:** ${ticketId}
**Outcome:** ${outcome}
**Staff Member:** ${staffMember}
**Notes:** ${notes}
**Logged in TX if successful:** ${loggedTx}
    `.trim();

    output.textContent = result;
    outputContainer.classList.remove("hidden");
  });

  copyBtn.addEventListener("click", () => {
    const text = output.textContent;
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch(err => alert("Failed to copy: " + err));
  });
});
