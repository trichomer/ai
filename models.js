const { OpenAI } = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.VENICE_API_KEY,
  baseURL: "https://api.venice.ai/api/v1",
});


async function listModels() {
  try {
    const models = await openai.models.list();
    console.log("Available models:", models.data.map(model => model.id));
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

listModels();