import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../lib/utils";

export default function UrlForm({ setShortUrl }) {
  const [originalUrl, setOriginalUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/api/shorten`, {
        original_url: originalUrl,
      });
      console.log(res);
      setShortUrl(res.data.short_url);
      setOriginalUrl("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="url"
        placeholder="Enter your URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
        className="px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white w-80"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        Shorten
      </button>
    </form>
  );
}
