const bodyParser = require("body-parser");
const express = require("express");
const nodeMailer = require("nodemailer");

const app = new express()
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


app.post("/",async(req,res)=>{
    const{email} = req.body;
    let transporter = nodeMailer.createTransport({
       service: 'gmail',
       auth: {
        user: 'roshanrosh0523@gmail.com',
        pass: 'jipbcxkdikklufyj'
       } 
      });

      const message ={
        from: 'roshanrosh0523@gmail.com', 
        to: `${email}`, 
        subject: "node-mailer-assignment", 
        text: "The assignment-03 mail a friend was successfully completed", 
      }
    
      let info = await transporter.sendMail(message);
    
      console.log("Message sent: %s", info.messageId);

       res.send("email sended successfully !");
})


app.listen(port,()=>{
    console.log(`the server is listening at http://localhost:${port}`);
})