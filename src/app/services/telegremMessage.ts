import axios from 'axios';

const URL_API_TG = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

export const fetchTelegramMessage = async (message: string) => {
  const data = await axios.post(URL_API_TG, {
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    text: message,
  });

  return data;
};
