import { Link } from "react-router-dom";

function HouseCard({ house }) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-md transition">
      <h2 className="text-xl font-bold text-gray-900">{house.title}</h2>

      <div className="mt-4 space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Rent:</span> {house.rent} BDT
        </p>
        <p>
          <span className="font-semibold">Location:</span> {house.location}
        </p>
        <p>
          <span className="font-semibold">University:</span>{" "}
          {house.university}
        </p>
        <p>
          <span className="font-semibold">Owner:</span> {house.ownerName}
        </p>
      </div>

      <Link
        to={`/houses/${house.id}`}
        className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

export default HouseCard;