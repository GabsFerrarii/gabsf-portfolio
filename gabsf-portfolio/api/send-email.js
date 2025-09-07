// Importa a biblioteca Nodemailer
import nodemailer from 'nodemailer';

// A função principal que a Vercel irá executar
export default async function handler(request, response) {
  // Permite apenas requisições do tipo POST
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nome, email, mensagem } = request.body;

  // Validação simples no servidor
  if (!nome || !email || !mensagem) {
    return response.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // Configura o "transportador" de e-mail usando suas credenciais SMTP
  // ATENÇÃO: Use Environment Variables para segurança!
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // Ex: smtp.gmail.com
    port: process.env.SMTP_PORT,       // Ex: 587 (para TLS) ou 465 (para SSL)
    secure: process.env.SMTP_PORT == 465, // `true` para a porta 465, `false` para outras
    auth: {
      user: process.env.SMTP_USER,     // Seu e-mail de envio
      pass: process.env.SMTP_PASS,     // Sua senha de e-mail ou senha de aplicativo
    },
  });

  try {
    // Envia o e-mail
    await transporter.sendMail({
      from: `"${nome}" <${process.env.SMTP_USER}>`, // Remetente (seu e-mail)
      to: 'gabesferreira15@gmail.com', // Destinatário (para onde o e-mail será enviado)
      replyTo: email, // Para que você possa responder diretamente ao usuário
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

    // Envia uma resposta de sucesso
    return response.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    // Envia uma resposta de erro
    return response.status(500).json({ message: 'Ocorreu um erro ao enviar a mensagem.' });
  }
}
