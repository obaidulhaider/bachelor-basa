import { useEffect, useState } from "react";
import API from "../services/api";
import HouseCard from "../components/HouseCard";

function Houses() {
  const [houses, setHouses] = useState([]);
  const [filters, setFilters] = useState({
    university: "",
    location: "",
    minRent: "",
    maxRent: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHouses = async () => {
    try {
      setLoading(true);
      setError("");

      const params = {};

      if (filters.university) params.university = filters.university;
      if (filters.location) params.location = filters.location;
      if (filters.minRent) params.minRent = filters.minRent;
      if (filters.maxRent) params.maxRent = filters.maxRent;

      const response = await API.get("/houses", { params });
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

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchHouses();
  };

  const clearFilters = () => {
    setFilters({
      university: "",
      location: "",
      minRent: "",
      maxRent: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Houses</h1>
        <p className="text-gray-600 mt-2">
          Browse bachelor-friendly rental houses near universities.
        </p>
      </div>

      <form
        onSubmit={handleSearch}
        className="bg-white border rounded-2xl shadow-sm p-5 mb-8 grid md:grid-cols-5 gap-4"
      >
        <input
          type="text"
          name="university"
          placeholder="University"
          value={filters.university}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="minRent"
          placeholder="Min rent"
          value={filters.minRent}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="maxRent"
          placeholder="Max rent"
          value={filters.maxRent}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Search
          </button>

          <button
            type="button"
            onClick={clearFilters}
            className="flex-1 border rounded-lg hover:bg-gray-50"
          >
            Clear
          </button>
        </div>
      </form>

      {loading && <p className="text-gray-600">Loading houses...</p>}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      )}

      {!loading && !error && houses.length === 0 && (
        <p className="text-gray-600">No houses found.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}

export default Houses;