import axios from 'axios';

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const message = req.body?.message;

  if (message?.text === '/start') {
    const name = message.from?.first_name || 'there';
    const chatId = message.chat?.id;

    await axios.post(`https://api.telegram.org/bot7488555690:AAF4kZbOezSnA-Ve9JzOs3d2LnDfFX3pytg/sendMessage`, {
      chat_id: chatId,
      text: `Hello, ${name}!`,
    });
  }

  return res.status(200).send('ok');
}

