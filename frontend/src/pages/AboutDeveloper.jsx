function AboutDeveloper() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white border rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900">About Developer</h1>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Hi, I am Mohammed Obaidul Hiader, a Computer Science graduate interested in web
          development, machine learning, computer vision, and practical software
          solutions. Bachelor Basa is a simple full-stack web application built
          to help bachelor students find rental houses near universities in
          Bangladesh.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Project Overview
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>✓ Student registration and login</li>
              <li>✓ JWT-based authentication</li>
              <li>✓ House listing with rent and location details</li>
              <li>✓ Admin dashboard for house management</li>
              <li>✓ MySQL database integration using Prisma ORM</li>
              <li>✓ Responsive frontend using React and Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MySQL",
                "Prisma",
                "JWT",
                "Axios",
                "Postman",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Links</h2>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
            >
              LinkedIn
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="border px-5 py-3 rounded-lg hover:bg-gray-50"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDeveloper;