.<div className="text-left max-w-4xl mx-auto px-4 leading-relaxed">
<h2 style="font-size: 2.5rem; font-weight: 700;">Artificial Intelligence 💻</h2>

Too much is happening in the world of AI, such that it is hard to keep up:-

* LLMS
* Langchain
* Prompt Engineering
* Vector DB
* R.A.G
* Langraph
* MCP
* Context Window
* Tokens
* Embedding
* AI Agents
* Claude, Gemini, etc
* Transformers

Lets read this article to not just understand these individually but also coherently!😊

# Large Language Models (LLMs)

Large Language Models (LLMs) are a type of Artificial Intelligence designed to understand, summarize, and generate human-like text. They are developed using trillions of data.

## Tokens

Data is converted to Tokens (small chunks of data, roughly 3/4 of a word for english text). The number of tokens depends on the model.
* AI Grok 4: 256000 tokens
* Anthropic Claude: 200000 tokens
* Gemini: 1000000 tokens (~750000 words, ~5000 lines of code)

If the number of Tokens in the *context window* is less, that leads to low latence/ faster response and can be used for small sized documents ( eg. nano, mini, flash). These have 2000-4000 tokens (~1500-3000 words) and are often cheaper to run.
For large novels or changing large files, we typically need more number of tokens ( eg. GPT 4.1, Gemini 2.5)

## Context Window

Imagine this like a short term memory that the LLM maintains for keeping the context of the conversation history. This is measured in terms of the number of tokens. The size of the context window is limited and depends on the model.

## Transformers

Transformers are the "brains" behind almost all modern AI, including Gemini, ChatGPT, and Claude.

Before Transformers were invented by Google in 2017, AI processed text one word at a time, like a person reading through a straw. Transformers changed everything by allowing the AI to look at an entire sentence or document all at once.

Its an architecture which enables context finding in a semantic way and parallel processing increasing the speed factor.


# Langchain

We can make a chatbot using an Open AI SDK. But we can quickly realise that there are some missing pieces. Storing Chat, maintaining conversation history, connecting to organisation's internal knolwedge system and handling the possiblity that company might switch from Open AI to anthropic or gemini in the future.

To handle this complexity, we have a readily implemented abstraction layer called Langchain. This helps you build AI agents using minimal code. It addresses all those painpoints using pre-build components and standardised interfaces.

These are basically pre-build components having direct access to LLMs and can used as simple imports in our code. Without Langchain, we need to build all this infrastucture ourselves for API management for multiple LLMs and other complexities.

Langchain has access to:
* models chatGPT, Anthropic, etc API connection
* chroma DB , Vector DB operation
* Open AI embeddings or text to vector conversions
* Memory saver for chat history management
* Custom tool definition for external system integrations

# Prompt Engineering

Prompt Engineering is the "art and science" of crafting precise instructions (prompts) to get the best possible results from an AI model like Gemini, ChatGPT, or Claude.

* **zero-shot**: Asking AI to perform a task without provinding any examples.
* **one-shot**: Here we provide an an example of how we want the AI to to change our data.
* **Few-shots**: The LLM can learn from similar examples by finding a pattern even though it has not seen the training data for the example provided.
* **chain-of-though**: In this type of prompt, we provide defined steps to think and act accordingly.

# Vector DB

Unlike The SQL DB which stores data by value, the vector DB stores the data by meaning. It uses embedding for the same. 
Vector DB handles embeddeding at scale and provides efficient retrieval based on semantic similarity. It shifts the burden from the user searching the database to the person who sets up the database, making it easier for user to search by meaning.

LLM can now freely search based on meaning and have the confidence that it will return relevant results ( for both "holiday" and "vacation").
Eg. Pinecone, Chromadb

## Embedding

Earlier in SQL database, to search for something we had to match the exact keyword to get relevant results. Embedding solved this by making search more semantic. An embeddging model takes a text and converts it into a vector (1536 numbers) that represents the meaning. The vector can be represented in a graph. Similar concepts end up getting similar dimensions and similar number patterns."Holiday" and "Vacation" may now be closer to each other due to embedding.

## Dimensionality

Now, lets consider a situation where the same word can have different meaning depending on the context in which it is used. That's why can't simple put words into embedding and store it in database.

We also need **Dimentionality**.

Dimensionality helps us capture tone, formality, and other features giving richness to the words.

We use **1536 dimensions** today allowing depth in each search.

## Retrieval (Scoring and Chunk Overlap)

In SQL we used the "where" query. But in Vector DB, we need to look at:

* **Scoring** : Scoring is a threshold of exactly how similar the results need to be so that they are considered a proper match.

Scoring helps differentiate between "Can I take my company laptop to Florida" and "Does my company allow vacations to Florida"

* **Chunk Overlap**: Chunking splits large documents into smaller pieces for putting them into embedding. In vector DB, values stored are chunked going into DB. Now its possible that it changes the meaning or context by cutting it off bluntly (chunking it). Chunk Overlap helps to leave enough margin for the search to work properly. Overlapping the chunk helps in preserving the meaning.

Eg.   chunk size: 500 characters (balanced)
      overlap: 100 characters
      Result: 40% better retrieval accuracy

# Retrieval Augmented Generation

 Instead of searching through the entire company or organisation database of documents, AI assistant can fit them into context window and generate output. This is Retrieval Augmented Generation.

 ## Retrieval

 The prompt provided is put into embedding and compared with the embedding in the vector DB. As a part of Semantic Search, meaning and context of the query is matched against the existing database to find the most relevant "chunks" of information related to the query

 ## Augmentation

 Retrieved Data is injected into the prompt at runtime. 
 
 AI assistants rely on what they learned during pre-training, which becomes outdated.

 In R.A.G, the semantic search results pends to the prompt that serves as an augmented knowledge. So, now the AI assistant is now given real time data, withoutthe need to modify or fine tune LLM with custom data.

 ## Generation

 AI assistant generates response based on the semantic relevant data retrieved from the vector database.

 *R.A.G is a very powerful system that can instantly improve the depth of the knowledge beyind its trainig data.*

# LangGraph

Most applications are much more complex than a simple chat app. They need to connect with the HRM system, connect to employee docs and make personalised responses.

Langchain has its limitations when complex multistep workflows, conditional branching or iterative processes need to be handled for various business requirements.

This problem is solved by LangGraph. It helps in better orchestration and go beyond Q/A interactions. LangGraph treats the AI application as a Directed Graph. It consistes of nodes (which are individual units of computation), edges (helps in connecting the nodes) and state (central "memory bank" that tracks everything that has happened so far). Every Node in a langraph is like a function and theedges represent the execution flow. 

Some powerful capabilities of langGraph:
* loops for interative analysis
* condtional branching based on intermediate results
* persistent state that maintains context across the entire workflow.

*LangGraph is an essential tool for workflow automation*

# Model Control Protocol (MCP)

In 2026, MCP (Model Context Protocol) has become the "USB-C for AI." It is an open standard introduced by Anthropic to solve the biggest problem in AI: fragmentation.

Before MCP, if you wanted an AI (like Claude or ChatGPT) to read your Google Drive, search your Slack, or query your database, developers had to write a unique, custom "connector" for every single combination of AI and tool.

Traditional APIs exposes endpoints that require implementationand understanding leading rigid intergration tied to specific systems.

MCP not just functions like an API but also has self describing interfaces and tools which AI agents can understand and use autonomously. It puts the burden on AI agents rather than developers, unlike traditional APIs

# Conclusion

AI has helped us go from maual seaching by value or text (upto 30 mins) to complex semantic document search (<30secs) with better accuracy using context aware search.

In the near future, AI will become even better by the deeper implementation of:
* Predictive Analysis
* Proactive Compliance Alerts
* Workflow Automation

*This would not just answer questions but actively solve problems before users can even ask for.*

