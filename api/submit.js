const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST allowed' });
  }

  const data = req.body;

  // Your Telegram bot info
  const TELEGRAM_TOKEN = '7488555690:AAF4kZbOezSnA-Ve9JzOs3d2LnDfFX3pytg';
  const CHAT_ID = '450565440';

  try {
    const message = `📄 New Submission:\n\n${JSON.stringify(data, null, 2)}`;

    await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });

    res.status(200).json({ success: true, message: 'Notified Telegram' });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ success: false, error: 'Telegram error' });
  }
};
