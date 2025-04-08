// const { OpenAI } = require("openai");
// require("dotenv").config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENROUTER_API_KEY,
//   baseURL: "https://openrouter.ai/api/v1",
// });

// async function chatWithGPT(message) {
//   const response = await openai.chat.completions.create({
//     model: "openai/gpt-3.5-turbo", // or try "mistralai/mistral-7b-instruct"
//     messages: [
//       { role: "user", content: message },
//     ],
//   });

//   return response.choices[0].message.content;
// }

// module.exports = chatWithGPT;
