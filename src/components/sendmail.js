const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com.br',
    port: 587,
    auth: {
      user: 'contato@pauloalves.me ',
      pass: 'C?=XF*j/#4xN',
    },
  });

  transporter.sendMail(
    {
      from: 'smtp.hostinger.com.br',
      to: 'contato@pauloalves.me',
      subject: `Message from portfolio`,
      html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `,
    },
    function (error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: 'success',
          }),
        });
      }
    }
  );
};
