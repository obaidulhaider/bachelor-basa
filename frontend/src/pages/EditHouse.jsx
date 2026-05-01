import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditHouse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    rent: "",
    location: "",
    university: "",
    ownerName: "",
    ownerPhone: "",
    description: "",
    availableFrom: "",
  });

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await API.get(`/houses/${id}`);
        const house = response.data.house;

        setFormData({
          title: house.title || "",
          rent: house.rent || "",
          location: house.location || "",
          university: house.university || "",
          ownerName: house.ownerName || "",
          ownerPhone: house.ownerPhone || "",
          description: house.description || "",
          availableFrom: house.availableFrom
            ? house.availableFrom.split("T")[0]
            : "",
        });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load house");
      } finally {
        setLoading(false);
      }
    };

    fetchHouse();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUpdating(true);

    try {
      await API.put(`/houses/${id}`, formData);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update house");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-600">Loading house information...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit House</h1>
      <p className="text-gray-600 mb-8">
        Update rental house details.
      </p>

      <div className="bg-white border rounded-2xl shadow-sm p-8">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="House title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="rent"
            placeholder="Monthly rent"
            value={formData.rent}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="university"
            placeholder="Nearby university"
            value={formData.university}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="ownerName"
            placeholder="Owner name"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="ownerPhone"
            placeholder="Owner phone number"
            value={formData.ownerPhone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="description"
            placeholder="Short description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={updating}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-300"
            >
              {updating ? "Updating..." : "Update House"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="border px-6 py-3 rounded-lg font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditHouse;