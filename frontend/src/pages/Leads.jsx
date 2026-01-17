import { useEffect, useState } from "react";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch leads from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/leads")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch leads");
        }
        return res.json();
      })
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching leads:", err);
        setError("Backend not running or API error");
        setLoading(false);
      });
  }, []);

  // Search filter
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-6">Leads</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Loading */}
      {loading && <p className="text-xl text-gray-500">Loading leads...</p>}

      {/* Error */}
      {error && <p className="text-xl text-red-500">{error}</p>}

      {/* No Data */}
      {!loading && !error && filteredLeads.length === 0 && (
        <p className="text-xl text-gray-500">No leads found.</p>
      )}

      {/* Table */}
      {!loading && !error && filteredLeads.length > 0 && (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Stage</th>
              <th className="py-3 px-6 text-left">Details</th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead._id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">{lead.name}</td>
                <td className="py-3 px-6">{lead.email}</td>
                <td className="py-3 px-6">{lead.phone || "-"}</td>
                <td className="py-3 px-6">{lead.stage}</td>
                <td className="py-3 px-6">
                  <button className="text-indigo-600 hover:text-indigo-800">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
