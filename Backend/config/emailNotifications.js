
    const nodemailpack= require('nodemailer')

    const nodeMailer= require('../config/nodeMailer')
    
    
    
    const sendEmail = async(email)=>{

    console.log("sending email to user",email)
    const emailDetails= {

        from : 'leif.frami31@ethereal.email',
        to:email,
        subject:'sending email using node.js',
        html:`<b>Hey there! </b>
        <br> This is our first message sent with  to <br/>`,
    };



     await nodeMailer.emailTransport.sendMail(emailDetails,
        (err, info)=>{
      if(err){
        console.log(err);
        return err;
      }
      else{
        console.log(info.accepted);
       return info;
      }


    })
    }

module.exports ={
    sendEmail
}