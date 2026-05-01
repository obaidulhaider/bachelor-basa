import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function AdminDashboard() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHouses = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await API.get("/houses");
      setHouses(response.data.houses);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch houses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this house?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/houses/${id}`);
      fetchHouses();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete house");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Manage Bachelor Basa house listings.
          </p>
        </div>

        <Link
          to="/admin/add-house"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Add House
        </Link>
      </div>

      {loading && <p className="text-gray-600">Loading houses...</p>}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      )}

      {!loading && !error && houses.length === 0 && (
        <div className="bg-white border rounded-2xl p-8 text-center">
          <p className="text-gray-600">No houses added yet.</p>
        </div>
      )}

      {!loading && !error && houses.length > 0 && (
        <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-5 py-4">Title</th>
                  <th className="px-5 py-4">Rent</th>
                  <th className="px-5 py-4">Location</th>
                  <th className="px-5 py-4">University</th>
                  <th className="px-5 py-4">Owner</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {houses.map((house) => (
                  <tr key={house.id} className="border-b">
                    <td className="px-5 py-4 font-medium">{house.title}</td>
                    <td className="px-5 py-4">{house.rent} BDT</td>
                    <td className="px-5 py-4">{house.location}</td>
                    <td className="px-5 py-4">{house.university}</td>
                    <td className="px-5 py-4">{house.ownerName}</td>
                    <td className="px-5 py-4">
                      <div className="flex gap-3">
                        <Link
                          to={`/admin/edit-house/${house.id}`}
                          className="text-blue-600 font-medium hover:underline"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDelete(house.id)}
                          className="text-red-600 font-medium hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;