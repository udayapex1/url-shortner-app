import UrlForm from "../components/UrlForm";
import { useState } from "react";

export default function Home() {
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>
      <UrlForm setShortUrl={setShortUrl} />

      {shortUrl && (
        <div className="mt-4 p-4 bg-gray-800 rounded flex items-center gap-3">
          <span>
            Short URL:{" "}
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              {shortUrl}
            </a>
          </span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white text-sm"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
