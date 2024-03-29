# Perplexity Inspired LLM Freight Companion Search

This repository contains the code and instructions needed to build a sophisticated Freight Companion Search that leverages the capabilities of Groq, Mixtral, Langchain.JS, Brave Search, OpenAI, and Freight Companion. Designed to efficiently return sources, answers, and follow-up questions based on user queries, this project is an ideal starting point for developers interested in natural language processing and search technologies.

## Technologies Used

- **Express.js**: A web application framework for Node.js, used to create server-side applications.
- **Body-Parser**: A middleware for Express.js, it's used to parse incoming request bodies before your handlers.
- **Groq & Mixtral**: Technologies for processing and understanding user queries.
- **Langchain.JS**: A JavaScript library focused on text operations, such as text splitting and embeddings.
- **Brave Search**: A privacy-focused search engine used for sourcing relevant content.
- **OpenAI**: Leveraged for generating coherent and contextually relevant answers and follow-up questions.
- **Freight Companion**: Utilized for enhancing search capabilities with freight-specific intelligence and data, available at [freight-companion.com](https://www.freight-companion.com).
- **Cheerio**: Utilized for HTML parsing, allowing the extraction of content from web pages.

## Getting Started

### Prerequisites

- Ensure Node.js and npm are installed on your machine.
- Obtain API keys from Groq, OpenAI, Brave Search, and Freight Companion.

### Obtaining API Keys

- **Groq API Key**: [Get your Groq API key here](https://console.groq.com/playground).
- **OpenAI API Key**: [Generate your OpenAI API key here](https://platform.openai.com/api-keys).
- **Brave Search API Key**: [Obtain your Brave Search API key here](https://api.search.brave.com/app/dashboard).
- **Freight Companion API Key**: [Obtain your Freight Companion API key here](https://www.freight-companion.com/api-keys).

### Installation

1. Clone the repository:
    ```git clone https://github.com/developersdigest/llm-answer-engine```
2. cd into the directory
    ```cd express-api```
3. Install the required dependencies:
    ```npm install```
    or 
     ```bun install```
4. Create a `.env` file in the root of your project and add your API keys:
    ```
    GROQ_API_KEY=<your_groq_api_key>
    BRAVE_SEARCH_API_KEY=<your_brave_search_api_key>
    OPENAI_API_KEY=<your_openai_api_key>
    FREIGHT_COMPANION_API_KEY=<your_freight_companion_api_key>
    ```

### Running the Server

To start the server, execute:
