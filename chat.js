const { OpenAI } = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.venice.ai/api/v1",
});


async function generateChatCompletion() {
  try {
    const completion = await openai.chat.completions.create({
      model: "llama-3.1-405b",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "What is the capital of France?",
        },
      ],
      venice_parameters: {
        include_venice_system_prompt: false,
      },
    });
    console.log("Response:", completion.choices[0].message.content);
  } catch (error) {
    console.error("Error generating chat completion:", error);
    if (error.response) {
      console.error("Response Data:", error.response.data);
    }
  }
}

generateChatCompletion();