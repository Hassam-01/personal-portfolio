import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const projects = [
  { id: 1, title: "Project One", description: "Description of project one." },
  { id: 2, title: "Project Two", description: "Description of project two." },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
  },
  { id: 4, title: "Project Four", description: "Description of project four." },
  { id: 5, title: "Project Five", description: "Description of project five." },
  { id: 6, title: "Project Six", description: "Description of project six." },
  {
    id: 7,
    title: "Project Seven",
    description: "Description of project seven.",
  },
  {
    id: 8,
    title: "Project Eight",
    description: "Description of project eight.",
  },
  { id: 9, title: "Project Nine", description: "Description of project nine." },
];

const ProjectPath = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedProject(id);
  };

  return (
    <div className="relative w-full h-screen bg-dark flex items-center justify-center border-2 border-red-500">
      {/* SVG for the curved path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <path
        //   d="M0 0 Q10 250, 350 150 T 330 500 T 0 250"
        // d="M0 0 Q100 200, 200 100 T 300 200 T 400 100"
          d="M0 0 Q0 100, 400 150 T 200 250"
          stroke="white"
          strokeWidth="2"   
          fill="transparent"
          strokeDasharray="4"
        />
        <circle cx="0" cy="100" r="5" fill="yellow" />
        <circle cx="400" cy="150" r="5" fill="yellow" />

        {projects.map((project, index) => (
          <circle
            key={project.id}
            cx={50 + index * 100}
            cy={index % 2 === 0 ? 50 : 150}
            r="15"
            fill="red"
            className="cursor-pointer"
            onClick={() => handleClick(project.id)}
          />
        ))}
      </svg>
      {/* Popup for project details */}
      {selectedProject !== null && (
        <Dialog
          open={true}
          onClose={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-dark p-6 rounded shadow-lg w-1/2">
            <h2 className="text-white text-2xl mb-4">
              {
                projects.find((project) => project.id === selectedProject)
                  ?.title
              }
            </h2>
            <p className="text-white">
              {
                projects.find((project) => project.id === selectedProject)
                  ?.description
              }
            </p>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 bg-white text-dark px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ProjectPath;
