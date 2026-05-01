import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../services/api";

function HouseDetails() {
  const { id } = useParams();

  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        setLoading(true);
        const response = await API.get(`/houses/${id}`);
        setHouse(response.data.house);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch house");
      } finally {
        setLoading(false);
      }
    };

    fetchHouse();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-600">Loading house details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  if (!house) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link to="/houses" className="text-blue-600 font-medium">
        ← Back to Houses
      </Link>

      <div className="bg-white border rounded-2xl shadow-sm p-8 mt-6">
        <h1 className="text-3xl font-bold text-gray-900">{house.title}</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-8 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Rent</p>
            <p className="text-xl font-bold">{house.rent} BDT</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-xl font-bold">{house.location}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Nearby University</p>
            <p className="text-xl font-bold">{house.university}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Available From</p>
            <p className="text-xl font-bold">
              {house.availableFrom
                ? new Date(house.availableFrom).toLocaleDateString()
                : "Not specified"}
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6">
          <h2 className="text-xl font-bold mb-3">Owner Contact</h2>

          <p className="text-gray-700">
            <span className="font-semibold">Owner Name:</span>{" "}
            {house.ownerName}
          </p>

          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Phone:</span> {house.ownerPhone}
          </p>
        </div>

        <div className="border-t mt-8 pt-6">
          <h2 className="text-xl font-bold mb-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">{house.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;