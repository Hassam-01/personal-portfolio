
// import bg from "../assets/background.svg";
import self from "../assets/self-animated.png";
const LandingPage = () => {
  return (
    <div className="relative h-screen text-white border-2 border-yellow-500">
      {/* Background */}

      {/* Content */}
      <div className="relative z-10 md:flex-row-reverse flex flex-col items-end justify-start h-full">
        <img src={self} alt="self" className="h-[800px]"/>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Hi, I’m Hassam Ali,</h1>
        <h2 className="text-6xl font-extrabold mt-4">I'M A WEB DEVELOPER</h2>
        <p className="mt-4 max-w-md text-center text-gray-300">
        A passionate web developer from Skardu, Pakistan! Pursuing undergrade from NUST, Islamabad, I specialize in designing sleek, functional, and user-centric websites. Whether it’s breathing life into creative ideas or solving complex digital challenges, I’m here to make it happen. Let’s build something amazing together!"
        </p>
        <a
          href="#"
          className="mt-6 inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200"
          >
            Start
        </a>
      </div>
</div>
    </div>
  );
};

export default LandingPage;
