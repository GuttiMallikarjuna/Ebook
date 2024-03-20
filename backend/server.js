const express = require("express");
const mysql = require("mysql");
const db = require("./db");

const {
  createDatabaseQuery,
  createRegisterTableQuery,
  useDatabaseQuery,
} = require("./queries");
const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(express.json());


var nodemailer = require("nodemailer");

// let savedOTPS = {};

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_USER, // Your gmail address.
    // Not @developer.gserviceaccount.com
    clientId: process.env.REACT_APP_CLIENTID,
    clientSecret: process.env.REACT_APP_CLIENTSECRET,
    refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
  },
});

const path = require('path');

app.post("/sendotp", (req, res) => {
  let email = req.body.email;
  console.log(req.body)
  // let digits = "0123456789";
  // let limit = 4;
  // let otp = "";
  // for (i = 0; i < limit; i++) {
  //   otp += digits[Math.floor(Math.random() * 10)];
  // }

  var mailOptions = {
    from: process.env.REACT_APP_FROMMAIL,
    to: `${email}`,
    subject: "Ebook from Infomerica",
    generateTextFromHTML: true,
    html: `
    
    <div class="container">
    <div class="header">
      <h2>Infomerica eBook</h2>
    </div>
    <div class="content">
      <p>Dear ${req.body.firstName},</p>
      <p>Thank you for your interest in Infomerica's eBook. <b>Please find the eBook attached to this email.</b></p>
      <p>We hope you find it informative and valuable. If you have any questions or feedback, feel free to reach out to us.
      <a href="mailto:infomericainc.com">infomericainc.com</a></p>
      <p>Best regards,</p>
      <p>The Infomerica Team</p>
    </div>
    <div class="footer">
      <p>This is an automated email. Please do not reply to this email.</p>
    </div>
  </div>
    `,
    attachments: [
      {
        filename: 'ebook-file.pdf', // Name of the attached file
        path: path.join(__dirname, 'pdfs', 'ebook-file.pdf'), // Path to the PDF file
        contentType: 'application/pdf' // Content type of the file
      }
    ]
  };

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Couldn't send email");
    } else {
      console.log("Email sent successfully");
      res.json(response);
    }
    smtpTransport.close();
  });
});

// app.post("/verify", (req, res) => {
//   let otprecived = req.body.otp;
//   let email = req.body.email;
//   if (savedOTPS[email] == otprecived) {
//     res.send("Verfied");
//   } else {
//     res.status(500).send("Invalid OTP");
//   }
// });

db.query(createDatabaseQuery, (err) => {
  if (err) throw err;
  db.query(useDatabaseQuery, (err) => {
    if (err) throw err;
    db.query(createRegisterTableQuery, (err) => {
      if (err) throw err;
      console.log("Database and tables created successfully");
    });
  });
});

app.post("/ebook", (req, res) => {
  const sql =
    "INSERT INTO ebook (`firstName`,`lastName`,`email`,`phone`,`websiteurl`,`companyName`,`empstrength` ) VALUES (?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.phone,
    req.body.websiteurl,
    req.body.companyName,
    req.body.empstrength,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully!");
    return res.json(data);
  });
});

app.listen(8080, () => {
  console.log("listening");
});

// app.listen(8080, () => {
//   console.log("listening");
// });

