import React, { useState } from "react";

function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setSentiment(data.sentiment);
    } catch (error) {
        console.error("Error:", error);
        setError("Error fetching sentiment. Please try again.");
    }
};

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sentiment Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here"
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <button id="analyze-button" type="submit" style={{ marginTop: "10px" }}>Analyze</button>
      </form>
      {sentiment && <h2>Sentiment: {sentiment}</h2>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SentimentAnalyzer;
