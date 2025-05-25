import axios from 'axios';

const TELEGRAM_API = `https://api.telegram.org/bot7488555690:AAF4kZbOezSnA-Ve9JzOs3d2LnDfFX3pytg`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const message = req.body.message;

    if (message?.text === '/start') {
      const chatId = message.chat.id;
      const name = message.from.first_name || 'there';

      await axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: `Hello, ${name}!`,
      });
    }

    return res.status(200).end('ok');
  }

  res.status(405).send({ message: 'Only POST allowed' });
}
