const User = require("../models/usersModel")
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen")
const { EMAIL, PASSWORD } = require('../env')
const bcrypt = require("bcrypt")


class UserController {
    index(req, res) {
        res.send('userboard')
    }
    async getEmail(req, res) {
        try {
            const email = await User.findOne({email: req.body.email})
            return res.status(200).json(email)

        }
        catch (err) {
            res.status(404).json({ message: err.message })
        }
    }
    async postEmail(req, res) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const email = req.body.email;
            const pattern = /@\w+\.wilmar-intl\.com$/;
            
            if (pattern.test(email)) {
                const users = await User.create({
                    username: req.body.username,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: hashed
                    
                })
                return res.status(200).json(users)

            } else {
              return res.status(404).json({message:"Địa chỉ email không khớp với định dạng"})
            }
        }
        catch (err) {
            return res.status(404).json({ message: err.message })

        }
    }

    // async forgotPass(req, res) {
    //     try {

    //         const salt = await bcrypt.genSalt(10);
    //         const hashed = await bcrypt.hash(req.body.password, salt);
    //         const user = await User.findOneAndUpdate({ email: req.body.email }, {
    //             password: hashed
    //         });
           

    //         const transporter = nodemailer.createTransport({
    //             service: "gmail",
    //             host: 'smtp.gmail.com',
    //             port: 465,
    //             secure: true, // Sử dụng SSL/TLS
    //             auth: {
    //                 user: process.env.USER, // Địa chỉ email của bạn
    //                 pass: process.env.PASSWORD // Mật khẩu của bạn
    //             }
    //         });

    //         const mailOptions = {
    //             from: process.env.USER, // Địa chỉ email của bạn
    //             to: user.email, // Địa chỉ email của người dùng
    //             subject: 'Xác nhận đặt lại mật khẩu',
    //             text: 'Mật khẩu của bạn đã được đặt lại thành công.'
    //         };

    //         transporter.sendMail(mailOptions)
    //             .then(info => {
    //                 console.log('Email đã được gửi: ' + info.response);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //         return res.status(200).json(user)

    //     }
    //     catch (err) {
    //         return res.status(404).json({ messgae: err.message })

    //     }
    // }

    async forgotPass(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            const digits = '0123456789';
            let code = '';
            for (let i = 0; i < digits.length - 4; i++) {
                const randomIndex = Math.floor(Math.random() * digits.length);
                code += digits[randomIndex];
            }
            

            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // Sử dụng SSL/TLS
                auth: {
                    user: process.env.USER, // Địa chỉ email của bạn
                    pass: process.env.PASSWORD // Mật khẩu của bạn
                }
            });

            const mailOptions = {
                from: process.env.USER, // Địa chỉ email của bạn
                to: req.body.email, // Địa chỉ email của người dùng
                subject: 'Xác nhận đặt lại mật khẩu',
                text: `passwordconfirm ${code}`
            };

            transporter.sendMail(mailOptions)
                .then(info => {
                    console.log('Email đã được gửi: ' + info.response);
                })
                .catch(error => {
                    console.log(error);
                });

            await User.findOneAndUpdate({email:user.email},{codeComfirm:code})
            
            return res.status(200).json(user)

        }
        catch (err) {
            return res.status(404).json({ messgae: err.message })

        }
    }

    async confirmPassword(req,res){
        try{

            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const confirm = req.body.codeComfirm
            const code = await User.findOne({codeComfirm:confirm})
            if(!code){
                return res.status(404).json({messgae:"not found"})
            }
            const users =await User.findOneAndUpdate({codeComfirm:confirm},{password:hashed})

            return res.status(200).json(users)

        }
        catch(err){
            return res.status(404).json({message: err.message})
        }
    }



}
module.exports = new UserController()