const nodeMailer = require('nodemailer');

const emailTransport = nodeMailer.createTransport({

    port: 587,
    host:  "smtp.ethereal.email",
    auth: {
       user: 'leif.frami31@ethereal.email' , 
       pass: '5Hkyx5nRzc3drxdmqy' ,

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