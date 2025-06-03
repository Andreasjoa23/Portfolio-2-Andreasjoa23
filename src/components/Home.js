import { Link } from "react-router-dom";

function Home() {
  const projects = [
    {
      id: "js-frameworks",
      title: "JavaScript Frameworks",
      desc: "React app with state & routing.",
      img: "/pictures/Lazysales.png",
    },
    {
      id: "bidify",
      title: "Bidify – SP2",
      desc: "Auction site with login, bidding, listings.",
      img: "/pictures/Bidify.png",
    },
    {
      id: "holidaze",
      title: "Holidaze – PE2",
      desc: "Hotel booking app with admin panel.",
      img: "/pictures/Holidaze.png",
    },
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left">
          <span className="text-sm text-blue-600 uppercase tracking-wide">
            Front-End Developer
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
            Hi, I'm Andreas Solsem Joakimsen
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a front-end developer from Norway. Former kindergarten teacher
            turned creative web developer. I specialize in building modern,
            responsive interfaces with React, Tailwind, and a passion for clean
            UI/UX.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/pictures/me.jpg"
            alt="Andreas Solsem Joakimsen"
            className="w-80 h-96 object-cover object-center rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
        {projects.map((p) => (
          <Link
            to={`/project/${p.id}`}
            key={p.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden border border-gray-300 ring-1 ring-gray-100"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {p.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Home;
