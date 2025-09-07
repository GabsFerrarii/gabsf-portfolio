import nodemailer from 'nodemailer';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nome, email, mensagem } = request.body;

  if (!nome || !email || !mensagem) {
    return response.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,   
    port: process.env.SMTP_PORT,       
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USER,    
      pass: process.env.SMTP_PASS,    
    },
  });

  try {
    await transporter.sendMail({
      from: `"${nome}" <${process.env.SMTP_USER}>`, 
      to: 'gabesferreira15@gmail.com', 
      replyTo: email, 
      subject: `Nova mensagem do Portfólio de ${nome}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Nova Mensagem do seu Portfólio</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr>
          <h3>Mensagem:</h3>
          <p style="white-space: pre-wrap;">${mensagem}</p>
        </div>
      `,
    });

    return response.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return response.status(500).json({ message: 'Ocorreu um erro ao enviar a mensagem.' });
  }
}
