const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const summarizeContent = async (text) => {
  try {
    const response = await fetch("https://gemini-api.com/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`, // Use the API_KEY variable here
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error summarizing content:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};