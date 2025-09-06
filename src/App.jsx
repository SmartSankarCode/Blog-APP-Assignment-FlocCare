import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(false);

  const clearInput = () => {
    setPrompt("");
    setBlog("");
  };

  const generateBlog = async () => {
    if (!prompt.trim()) {
      alert("Please enter a topic!");
      return;
    }

    setLoading(true);
    setBlog("");

    try {
      const response = await fetch("http://localhost:5000/generateblog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setBlog(data.blog || "No blog generated.");
    } catch (err) {
      setBlog("Error generating blog: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h1>AI Blog Generator</h1>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your blog topic..."
        />
        <button className="clear-btn" onClick={clearInput}>Clear</button>
      </div>

      <div className="output-section">
        <button className="generate-btn" onClick={generateBlog}>
          Generate Blog
        </button>

        <div className="blog-screen">
          {loading ? (
            <div className="loading-inside">
              <img src="/loading-spinner.gif" alt="Loading..." width="80" />
              <p>Generating blog... Please wait.</p>
            </div>
          ) : blog ? (
            <p>{blog}</p>   
          ) : (
          <p>Your generated blog will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
