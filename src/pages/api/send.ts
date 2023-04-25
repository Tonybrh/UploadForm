// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer'
import nodemailer from 'nodemailer'
const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      console.log(file);
      const time = new Date().getTime()
      cb(null, file.fieldname + '-' + time)
    }
  })
const upload = multer({storage: storage})
const user = process.env.userMail;
const pass = process.env.passwordMail;
const sendMail = async (data: {
    name: string;
    email: string;
    upload: File;
}) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user,
            pass
        }
    });

    const info = await transporter.sendMail({
        from: data.email,
        to: user,
        replyTo: data.email,
        subject: `Formulário de ${data.name}`,
        text: `${data.name}`,
         attachments:[
          {
            filename: "Oi.jpg",
            contentType: 'image/jpg',
          }
        ],
        html: `<div>
                    <h1>Formzinho basico</h1>
                    <p><strong>Nome</strong>: ${data.name}</p>
                    <p><strong>Email</strong>: ${data.email}</p>
                </div>`
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body;
        try {
            console.log(data);
            
            await sendMail(data);
            return res.status(200).json({ success: true });
        } catch (err) {
            if (err instanceof Error) {
                console.log(err);
                return res.status(400).json({ message: err.message });
            } else {
                console.log(err);
                return res
                    .status(400)
                    .json({ message: 'Unknown error occurred' });
            }
        }
    }
    return res.status(400).json({ message: 'Bad request' });
}
