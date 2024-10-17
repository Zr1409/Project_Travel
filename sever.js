const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = 3000;

// Cấu hình SendGrid API Key
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.use(bodyParser.json());

// Endpoint để gửi email
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: 'your-email@example.com', // Địa chỉ email gửi
    subject,
    text,
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
