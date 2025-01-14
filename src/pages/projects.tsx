import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
  TbCircleNumber6,
  TbCircleNumber7,
  TbCircleNumber8,
  TbCircleNumber9,
} from "react-icons/tb";

const projects = [
  { id: 1, title: "Project One", description: "Description of project one." },
  { id: 2, title: "Project Two", description: "Description of project two." },
  { id: 3, title: "Project Three", description: "Description of project three." },
  { id: 4, title: "Project Four", description: "Description of project four." },
  { id: 5, title: "Project Five", description: "Description of project five." },
  { id: 6, title: "Project Six", description: "Description of project six." },
  { id: 7, title: "Project Seven", description: "Description of project seven." },
  { id: 8, title: "Project Eight", description: "Description of project eight." },
  { id: 9, title: "Project Nine", description: "Description of project nine." },
];

const pointsMD = [
  { x: 100, y: 88 },
  { x: 250, y: 125 },
  { x: 400, y: 150 },
  { x: 450, y: 220 },
  { x: 310, y: 235 },
  { x: 170, y: 250 },
  { x: 40, y: 260 },
  { x: -100, y: 285 },
  { x: -10, y: 370 },
];

const numberIcons = [
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbCircleNumber5,
  TbCircleNumber6,
  TbCircleNumber7,
  TbCircleNumber8,
  TbCircleNumber9,
];

const ProjectPath = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedProject(id);
  };

  return (
    <div className="relative w-full h-screen bg-dark flex items-center justify-center">
      <h1 className="font-extrabold text-4xl">PROJECTS</h1>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <path
          d="M0 0 Q0 100, 400 150 T 170 250 T 150 400"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          strokeDasharray="4"
        />
        {projects.map((project, index) => {
          const Icon = numberIcons[index];
          const isSelected = selectedProject === project.id;
          return (
            <foreignObject
              key={project.id}
              x={pointsMD[index].x - 15}
              y={pointsMD[index].y - 15}
              width="40"
              height="40"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  isSelected ? "bg-blue-500" : "bg-black"
                }`}
                onClick={() => handleClick(project.id)}
              >
                <Icon className="text-white text-xl" />
              </div>
            </foreignObject>
          );
        })}
      </svg>
      {selectedProject !== null && (
        <Dialog
          open={true}
          onClose={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-dark p-6 rounded shadow-lg w-1/2">
            <h2 className="text-white text-2xl mb-4">
              {
                projects.find((project) => project.id === selectedProject)?.title
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
