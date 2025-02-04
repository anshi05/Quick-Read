import React, { useState } from "react";
import { summarizeContent } from "../utils/api";

const Popup = () => {
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "scrapeContent" }, (response) => {
        summarizeContent(response.content).then((data) => setSummary(data.summary));
      });
    });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-72">
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
