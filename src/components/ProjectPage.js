import { useParams } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();

  const projectData = {
    "js-frameworks": {
      title: "JavaScript Frameworks",
      img: "/pictures/Lazysales.png",
      caption: "Screenshot of the JS Frameworks CA app.",
      live: "https://lazysales.netlify.app/",
      repo: "https://github.com/annechh/ca-js-frameworks",
      reflection: "Improved state management and component structure."
    },
    "bidify": {
      title: "Bidify – Semester Project 2",
      img: "/pictures/Bidify.png",
      caption: "Screenshot of the Bidify marketplace app.",
      live: "https://bidify-semesterproject.netlify.app/",
      repo: "https://github.com/AndreasAUG23F/Bidify-SemesterProject-2",
      reflection: "Enhanced form validation, responsiveness, and structure."
    },
    "holidaze": {
      title: "Holidaze – Project Exam 2",
      img: "/pictures/Holidaze.png",
      caption: "Screenshot of the Holidaze booking app.",
      live: "https://holidazer.netlify.app/",
      repo: "https://github.com/Andreasjoa23/PE2-Holidaze",
      reflection: "Only README updated due to exam grading policy."
    }
  };

  const proj = projectData[id];
  if (!proj)
    return (
      <div className="text-red-600 text-center py-10">
        Project not found
      </div>
    );

  return (
    <article className="max-w-4xl mx-auto my-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{proj.title}</h2>

      <div className="mb-6">
        <img
          src={proj.img}
          alt={proj.title}
          className="w-full h-auto rounded-xl shadow"
        />
        <figcaption className="text-sm text-gray-500 italic mt-2">
          {proj.caption}
        </figcaption>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <a
          href={proj.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Live Site
        </a>
        <a
          href={proj.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50 transition"
        >
          GitHub Repo
        </a>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          Reflection & Improvements
        </h3>
        <p className="text-gray-700 leading-relaxed">{proj.reflection}</p>
      </div>
    </article>
  );
}

export default ProjectPage;
