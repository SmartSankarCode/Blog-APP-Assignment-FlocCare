# AI Blog Generator

## Overview
This project is a simple web application that allows users to generate a detailed blog based on a text prompt. The user enters a topic, and the app generates a 1000-word blog displayed on the page with proper formatting. The application demonstrates the integration of a frontend (React) with a backend (Node.js/Express) and utilizes an existing Large Language Model (LLM) via API.

---

## Live Demo

Check out the live demo of the project here: [Smart Sankar Code Blog App](https://smartsankarcode-blog-app.netlify.app)

**Note:** Generating the blog may take a few seconds because the backend is hosted on Render, which can cause slight delays for API responses.


---

## Features
- Enter a topic to generate a blog.
- Loading indicator while the blog is being generated.
- Clear input option to reset the prompt.
- Display of formatted blog content using markdown.
- Responsive and user-friendly interface.

---

## Technology Stack
- **Frontend**: React.js, `marked` library for rendering Markdown, CSS for styling.
- **Backend**: Node.js, Express.js.
- **LLM**: Google Gemini API (`@google/genai` library) to generate blog content.
- **Other**: CORS for frontend-backend communication, dotenv for environment variables.

---

## Approach
1. **Frontend**
   - A React component handles the user input and displays the generated blog.
   - The `generateBlog` function sends a POST request to the backend with the user’s prompt.
   - The response is converted from Markdown to HTML using the `marked` library and displayed on the page.

2. **Backend**
   - The backend exposes an endpoint `/generateblog`.
   - It receives the prompt from the frontend and sends it to the Google Gemini API for content generation.
   - The request to Gemini includes instructions to generate a **detailed blog of ~1000 words with proper headings and paragraphs**.
   - The response text is sent back to the frontend as JSON.

3. **Blog Generation**
   - The LLM (Google Gemini) is used to generate human-like text based on the prompt.
   - The output is converted to HTML for rendering, preserving headings, paragraphs, and formatting.

---

## Folder Structure
/project-root
├─ node_modules/
├─ public/
│ └─ loading-spinner.gif
├─ src/
│ ├─ App.jsx
│ ├─ App.css
│ └─ main.jsx
├─ server.js
├─ package.json
├─ vite.config.js
└─ .env




**Notes:**
- `src/` contains your Vite React frontend code.
- `server.js` contains the backend Express server.
- `.env` stores your API keys (e.g., `GEMINI_API_KEY`).

---

## Setup Instructions

1. **Install dependencies** (frontend + backend):
```bash
npm install express cors dotenv @google/genai react react-dom marked

---

Start the backend server (Express):

npm start

---

Start the frontend React app:

npm run dev


Notes

The project uses Google Gemini API, which is a paid service. For free alternatives, HuggingFace or OpenAI free tiers can be used.

The application focuses on functionality and UX, including input validation, loading feedback, and formatted output.

Markdown formatting ensures the generated blog appears structured with headings, paragraphs, and bold text.