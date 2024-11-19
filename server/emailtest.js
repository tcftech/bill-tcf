const email = require('emailjs'); // Use CommonJS require



const server = email.server.connect({
  user: "tcftestingtech@gmail.com", // Your email
  password: "Vignesh8857", // Email password or app password
  host: "smtp.gmail.com", // SMTP host
  ssl: true, // Use SSL
});

const sendEmail = () => {
  server.send(
    {
      text: "This is a test email!",
      from: "TCF Tech <tcftestingtech@gmail.com>",
      to: "Recipient Name <recipient_email@example.com>",
      subject: "Test Email",
    },
    (err, message) => {
      if (err) {
        console.error("Error sending email:", err);
      } else {
        console.log("Email sent successfully:", message);
      }
    }
  );
};

// sendEmail();
console.log("**************");

