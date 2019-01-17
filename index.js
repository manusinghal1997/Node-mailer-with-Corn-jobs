// index.js //adding cron-job to add scheduling
 const cron = require("node-cron");

 //Add express to provide web server
 const express = require("express");

 //Adding node file System
 let nodemailer = require("nodemailer");

//Creating object of express
 app=express();

 // create mail transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sender@gmail.com",
        pass: ""
      }
    });

    // sending emails at periodic intervals of 1 minute
    cron.schedule("* * * * *", function(){
      console.log("---------------------");
      console.log("Running Cron Job");
      let mailOptions = {
        from: "sender@gmail.com",
        to: "receiver@gmail.com",
        subject: `Email From Node Mailer;)`,
        text: `Hello world`
      };
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          throw error;
        } else {
          console.log("Email successfully sent!");
        }
      });
    });
// set the port to listen
    app.listen("3000");