const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export async function handleGemeniAPICall(userPrompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    
    const prompt = userPrompt;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return response;
}
