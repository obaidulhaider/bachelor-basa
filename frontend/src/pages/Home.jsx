import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Find bachelor-friendly rooms near your university
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            Bachelor Basa helps students find rental houses by showing only the
            essential details: rent, location, owner name, and contact number.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/houses"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Browse Houses
            </Link>

            <Link
              to="/register"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            What users can see
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>✓ Monthly rent</p>
            <p>✓ Location near university</p>
            <p>✓ Owner name</p>
            <p>✓ Owner contact number</p>
            <p>✓ Short house description</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;