import React, { useState } from "react";
import { summarizeContent } from "../utils/api";

const Popup = () => {
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    const tabs = await new Promise((resolve) =>
      chrome.tabs.query({ active: true, currentWindow: true }, resolve)
    );
  
    const response = await new Promise((resolve) =>
      chrome.tabs.sendMessage(tabs[0].id, { action: "scrapeContent" }, resolve)
    );
  
    const data = await summarizeContent(response.content);
    setSummary(data.summary);
  };

  return (
    <div className="p-4 bg-black rounded-lg shadow-md h-72 w-72">
      <button
        onClick={handleSummarize}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Summarize Page
      </button>
      {summary && <p className="mt-4 text-gray-700">{summary}</p>}
    </div>
  );
};

export default Popup;
