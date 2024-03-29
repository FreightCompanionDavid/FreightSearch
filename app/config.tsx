export const config = {
    useOllamaInference: false, 
    useOllamaEmbeddings: false, 
    inferenceModel: 'mixtral-8x7b-32768', // Groq: 'mixtral-8x7b-32768', 'gemma-7b-it' // OpenAI: 'gpt-3.5-turbo', 'gpt-4' // Ollama 'mistral', 'llama2' etc
    inferenceAPIKey: (process.env.inferenceModel || '').includes('mixtral') || (process.env.inferenceModel || '').includes('gemma') ? process.env.GROQ_API_KEY : process.env.OPENAI_API_KEY, // Dynamically select API key based on model
    embeddingsModel: 'text-embedding-3-small', // Ollama: 'llama2', 'nomic-embed-text' // OpenAI 'text-embedding-3-small', 'text-embedding-3-large'
    textChunkSize: 1000, // Recommended to decrease for Ollama
    textChunkOverlap: 400, // Recommended to decrease for Ollama
    numberOfSimilarityResults: 4, // Number of similarity results to return per page
    numberOfPagesToScan: 10, // Recommended to decrease for Ollama
    nonOllamaBaseURL: 'https://api.openai.com/v1', // Updated to use OpenAI base URL
};
