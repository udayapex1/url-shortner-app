import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../lib/utils";

export default function Admin() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/admin/all`)
      .then((res) => setUrls(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <table className="table-auto w-full border border-gray-600">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border border-gray-600">Original URL</th>
            <th className="p-2 border border-gray-600">Short URL</th>
            <th className="p-2 border border-gray-600">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td className="p-2 border border-gray-600">{url.original_url}</td>
              <td className="p-2 border border-gray-600">{url.short_url}</td>
              <td className="p-2 border border-gray-600 text-center">
                {url.click_count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
