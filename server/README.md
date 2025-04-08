graph TD;
    A[Upload PDF] --> B[Parse & Extract Text];
    B --> C[Chunk Text with LangChain];
    C --> D[Embed with OpenAI API];
    D --> E[Store in Vector DB];
    F[User Asks Question] --> G[Embed Question];
    G --> H[Search Vector DB];
    H --> I[Fetch Top-k Chunks];
    I --> J[Send to OpenAI Chat API];
    J --> K[Get Response];
    K --> L[Show Answer on UI];


✅ Core Features:

 Upload PDF files via React frontend

 Parse PDF content on backend

 Chunk & embed text using LangChain + OpenAI

 Store & query embeddings via Pinecone or ChromaDB

 Use ChatGPT to answer questions with context

 Display interactive Q&A on frontend