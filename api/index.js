const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST allowed' });
  }

  const data = req.body;

  // Your Telegram bot info
  const TELEGRAM_TOKEN = 'your_bot_token';
  const CHAT_ID = 'your_chat_id';

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
