import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../lib/utils";

export default function Admin() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/admin/all`)
      .then((res) => {
        setUrls(res.data);
        console.log(res.data);
      })

      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="overflow-x-auto">
        <table className="table-auto min-w-full border border-gray-600">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 border border-gray-600 text-left">
                Original URL
              </th>
              <th className="p-2 border border-gray-600 text-left">
                Short URL
              </th>
              <th className="p-2 border border-gray-600 text-center">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url._id} className="hover:bg-gray-800">
                <td className="p-2 border border-gray-600 break-words max-w-xs">
                  <a
                    href={url.original_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {url.original_url}
                  </a>
                </td>
                <td className="p-2 border border-gray-600 break-words max-w-xs">
                  <p className="text-white ">{url.shorten_code}</p>
                </td>
                <td className="p-2 border border-gray-600 text-center">
                  {url.click_count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
