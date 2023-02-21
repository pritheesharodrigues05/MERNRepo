const nodeMailer = require('nodemailer');

const emailTransport = nodeMailer.createTransport({

    port: 465,
    host:  "smtp.ethereal.email",
    auth: {
       user: 'pedro.boehm@ethereal.email' , 
       pass: 's9vS5nVdb4gB471fGg' ,

    },
//   secure: true,
  attachments:[
   {
    filename: 'text note.txt',
    path : './textFiles/notes.txt'
   }
  ]
})



module.exports={emailTransport};