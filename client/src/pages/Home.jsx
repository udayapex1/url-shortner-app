import UrlForm from "../components/UrlForm";
import { useState } from "react";

export default function Home() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">URL Shortener</h1>
      <UrlForm setShortUrl={setShortUrl} />
      {shortUrl && (
        <div className="mt-4 p-4 bg-gray-800 rounded">
          Short URL:{" "}
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
