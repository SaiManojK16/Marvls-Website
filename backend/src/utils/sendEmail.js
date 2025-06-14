const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kartalasaimanoj@gmail.com',
        pass: 'mufq ewls tajc yler',
      },
    });

    const message = {
      from: `MARVLS <kartalasaimanoj@gmail.com>`,
      to: 'kartalasaimanoj@gmail.com',
      subject: options.subject,
      text: options.message,
      html: options.message.replace(/\n/g, '<br>'), // Convert newlines to HTML breaks
    };

    const info = await transporter.sendMail(message);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email: ' + error.message);
  }
};

module.exports = sendEmail; 