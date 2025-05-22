document.getElementById("qp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get field values
  const name = document.getElementById("ingame-name").value.trim() || "N/A";
  let discord = document.getElementById("discord").value.trim() || "N/A";
  const appealDate = document.getElementById("appeal-date").value || "N/A";
  const banId = document.getElementById("ban-id").value.trim() || "N/A";
  const ticketId = document.getElementById("ticket-id").value.trim() || "N/A";
  const outcome = document.getElementById("outcome").value.trim() || "N/A";
  const staff = document.getElementById("staff-member").value.trim() || "N/A";
  const notes = document.getElementById("notes").value.trim() || "N/A";
  const logged = document.getElementById("logged-tx").value || "N/A";

  // Format Discord ID to mention (only numeric)
  const numericDiscord = discord.replace(/\D/g, '');
  discord = numericDiscord ? `<@${numericDiscord}>` : "N/A";

  // Build output text
  const output = `**Ban Appeal Log**\n\n` +
    `**Ingame Name:** ${name}\n` +
    `**Discord:** ${discord}\n` +
    `**Date of Appeal:** ${appealDate}\n` +
    `**Ban ID & Reason:** ${banId}\n` +
    `**Ticket ID:** ${ticketId}\n` +
    `**Outcome:** ${outcome}\n` +
    `**Staff Member:** ${staff}\n` +
    `**Notes:** ${notes}\n` +
    `**Logged in TX if successful:** ${logged}`;

  // Display the output
  const outputContainer = document.getElementById("output-container");
  const outputElement = document.getElementById("output");
  outputElement.textContent = output;
  outputContainer.classList.remove("hidden");
});

// Copy to clipboard
document.getElementById("copy-btn").addEventListener("click", function () {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copy-btn");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "📋 Copy to Clipboard", 1500);
  });
});
