import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiExpress, 
  SiPostgresql, 
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiPython,
  SiRedis
} from "react-icons/si";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<{
    name: string;
    icon: JSX.Element;
    color: string;
    textColor: string;
    description: string;
    category: string;
  } | null>(null);

  const technologies = [
    // Frontend
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" size={50} />,
      color: "from-cyan-400 to-blue-500",
      textColor: "text-cyan-400",
      description: "Building interactive and reusable UI components with React's powerful ecosystem.",
      category: "Frontend"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-200" size={50} />,
      color: "from-gray-200 to-gray-400",
      textColor: "text-gray-200",
      description: "Server-side rendering and static site generation for React applications.",
      category: "Frontend"
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-400" size={50} />,
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-400",
      description: "State management for complex JavaScript applications.",
      category: "Frontend"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" size={50} />,
      color: "from-teal-400 to-cyan-500",
      textColor: "text-teal-400",
      description: "Utility-first CSS framework for rapid UI development.",
      category: "Frontend"
    },
    
    // Languages
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={50} />,
      color: "from-yellow-300 to-yellow-500",
      textColor: "text-yellow-400",
      description: "Creating dynamic and responsive web applications with JavaScript.",
      category: "Language"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" size={50} />,
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-500",
      description: "Ensuring type safety and better code quality with TypeScript.",
      category: "Language"
    },
    {
      name: "Python",
      icon: <SiPython className="text-blue-400" size={50} />,
      color: "from-blue-400 to-yellow-500",
      textColor: "text-blue-400",
      description: "Versatile programming language for web development, data analysis, and more.",
      category: "Language"
    },
    
    // Backend
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" size={50} />,
      color: "from-green-500 to-green-700",
      textColor: "text-green-500",
      description: "Building scalable server-side applications with JavaScript runtime Node.js.",
      category: "Backend"
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-400" size={50} />,
      color: "from-gray-400 to-gray-600",
      textColor: "text-gray-400",
      description: "Creating robust APIs and web applications with Express.js framework.",
      category: "Backend"
    },
    
    // Databases
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-600" size={50} />,
      color: "from-blue-600 to-indigo-700",
      textColor: "text-blue-600",
      description: "Managing relational data with PostgreSQL's advanced features and reliability.",
      category: "Database"
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-orange-400" size={50} />,
      color: "from-orange-400 to-orange-600",
      textColor: "text-orange-400",
      description: "Handling structured data with MySQL's performance and flexibility.",
      category: "Database"
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" size={50} />,
      color: "from-green-400 to-green-600",
      textColor: "text-green-400",
      description: "NoSQL database for modern applications with flexible data models.",
      category: "Database"
    },
    {
      name: "Redis",
      icon: <SiRedis className="text-red-500" size={50} />,
      color: "from-red-500 to-red-700",
      textColor: "text-red-500",
      description: "In-memory data structure store used as a database, cache, and message broker.",
      category: "Database"
    },
    
    // Tools
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500" size={50} />,
      color: "from-orange-500 to-red-600",
      textColor: "text-orange-500",
      description: "Version control system for tracking changes in source code.",
      category: "Tool"
    }
  ];

  const categories = [
    { name: "All", color: "from-purple-500 to-pink-500" },
    { name: "Frontend", color: "from-blue-400 to-cyan-400" },
    { name: "Backend", color: "from-green-400 to-emerald-400" },
    { name: "Database", color: "from-yellow-400 to-amber-400" },
    { name: "Language", color: "from-red-400 to-orange-400" },
    { name: "Tool", color: "from-gray-400 to-gray-600" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTechnologies = selectedCategory === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <div className="py-16 px-4 sm:px-8 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center text-white">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        <motion.div 
          className="h-1 w-full rounded-full bg-gray-800 mb-12"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="h-full w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.name
                  ? `text-white bg-gradient-to-r ${category.color}`
                  : "text-gray-300 bg-gray-800 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Tech Description */}
        {hoveredTech && (
          <motion.div 
            className="text-center mb-12 px-6 py-6 rounded-xl mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "linear-gradient(145deg, rgba(45, 45, 45, 0.9), rgba(25, 25, 25, 0.9))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className={hoveredTech.textColor}>
                {hoveredTech.icon}
              </div>
              <h3 className={`text-3xl font-bold ${hoveredTech.textColor}`}>{hoveredTech.name}</h3>
            </div>
            <p className="text-gray-300 text-lg">{hoveredTech.description}</p>
            <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
              {hoveredTech.category}
            </span>
          </motion.div>
        )}

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer group hover:bg-gray-800 transition-all"
              style={{
                background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.05
              }}
              onMouseEnter={() => setHoveredTech(tech)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`${tech.textColor} group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <h3 className={`mt-4 font-semibold text-xl ${tech.textColor}`}>{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;