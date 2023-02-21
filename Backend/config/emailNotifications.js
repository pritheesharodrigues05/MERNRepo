
    const nodemailpack= require('nodemailer')

    const nodeMailer= require('../config/nodeMailer')
    
    
    
    const sendEmail = async(email)=>{

    console.log("sending email to user",email)
    const emailDetails= {

        from : 'pedro.boehm@ethereal.email',
        to:email,
        subject:'sending emsil using node.js',
        html:`<b>Hey there! </b>
        <br> This is our first message sent with  to <br/>`,
    };



    const sendmailer= await nodeMailer.emailTransport.sendMail(emailDetails
    //     (err, info)=>{
    //   if(err){
    //     console.log(err);
    //     return err;
    //   }
    //   else{
    //     console.log(info.accepted);
    //    return info;
    //   }
// }
    )

    }

module.exports ={
    sendEmail
}