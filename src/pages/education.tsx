const Education = () => {
  return (
    <div className="p-8 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center ">
          Education Journey
        </h2>
        
        {/* Desktop timeline (hidden on small screens) */}
        <div className="hidden md:flex w-full justify-center">
          <div className="space-y-12 relative">
            {/* Timeline line with steps */}
            <div className="h-[600px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500">
              {/* Step 1 */}
              <div className="absolute right-0 w-56 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 top-8">
                <div className="absolute -left-4 -top-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg transition-all duration-300 transform hover:scale-110">
                  1
                </div>
                <div className="right-1/4 top-5 absolute flex group items-start mt-4 rounded-lg px-6 py-6 w-72 shadow-lg hover:shadow-2xl transition-all duration-500 delay-300 transform hover:scale-105" 
                     style={{
                       background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                       backdropFilter: "blur(10px)",
                       border: "1px solid rgba(255, 255, 255, 0.1)",
                       height: "4rem"
                     }}>
                  <div className="flex-1 space-y-4 group">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-xl text-center">
                      Matriculation
                    </h3>
                    <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                      <p className="text-blue-400 text-sm">
                        Public School and College
                      </p>
                      <p className="text-green-400 text-sm">Skardu</p>
                      <p className="text-purple-400 text-sm mt-2">
                        2018 - 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="absolute left-0 w-56 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 top-52 ">
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg">
                  <h3>2</h3>
                </div>
                <div className="left-1/4 top-5 absolute flex group items-start mt-4 rounded-lg px-6 py-6 w-72 shadow-lg hover:shadow-2xl transition-all duration-500 delay-300 transform hover:scale-105"
                     style={{
                       background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                       backdropFilter: "blur(10px)",
                       border: "1px solid rgba(255, 255, 255, 0.1)",
                       height: "4rem"
                     }}>
                  <div className="flex-1 space-y-4 group transition-all duration-300 ">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-xl text-center">
                      FSc Pre-Medical
                    </h3>
                    <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                      <p className="text-blue-400 text-sm">
                        Fauji Foundation College, New Lalazar
                      </p>
                      <p className="text-green-400 text-sm">Rawalpindi</p>
                      <p className="text-purple-400 text-sm mt-2">
                        2020 - 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="absolute right-0 w-56 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 top-96">
                <div className="absolute -left-4 -top-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold z-10 shadow-lg transition-all duration-300 transform hover:scale-110 text-white">
                  3
                </div>
                <div className="right-1/4 top-5 absolute flex group items-start mt-4 rounded-lg px-6 py-6 w-72 shadow-lg hover:shadow-2xl transition-all duration-500 delay-300 transform hover:scale-105"
                     style={{
                       background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                       backdropFilter: "blur(10px)",
                       border: "1px solid rgba(255, 255, 255, 0.1)",
                       height: "4rem"
                     }}>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-xl text-center">
                      BS Computer Science
                    </h3>
                    <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                      <p className="text-blue-400 text-sm">
                        National University of Sciences and Technology
                      </p>
                      <p className="text-green-400 text-sm">Islamabad</p>
                      <p className="text-purple-400 text-sm mt-2">2023 - Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile vertical stack (shown only on small screens) */}
        <div className="md:hidden space-y-10">
          {/* Card 1 */}
          <div className="relative rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
               style={{
                 background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                 backdropFilter: "blur(10px)",
                 border: "1px solid rgba(255, 255, 255, 0.1)"
               }}>
            <div className="absolute -top-5 -left-2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg">
              1
            </div>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-xl mb-4 text-center">
              Matriculation
            </h3>
            <div className="text-center space-y-2">
              <p className="text-blue-400 text-sm">
                Public School and College
              </p>
              <p className="text-green-400 text-sm">Skardu</p>
              <p className="text-purple-400 text-sm mt-2">
                2018 - 2020
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="relative rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
               style={{
                 background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                 backdropFilter: "blur(10px)",
                 border: "1px solid rgba(255, 255, 255, 0.1)"
               }}>
            <div className="absolute -top-5 -left-2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg">
              2
            </div>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-xl mb-4 text-center">
              FSc Pre-Medical
            </h3>
            <div className="text-center space-y-2">
              <p className="text-blue-400 text-sm">
                Fauji Foundation College, New Lalazar
              </p>
              <p className="text-green-400 text-sm">Rawalpindi</p>
              <p className="text-purple-400 text-sm mt-2">
                2020 - 2022
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="relative rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
               style={{
                 background: "linear-gradient(145deg, rgba(45, 45, 45, 0.8), rgba(25, 25, 25, 0.8))",
                 backdropFilter: "blur(10px)",
                 border: "1px solid rgba(255, 255, 255, 0.1)"
               }}>
            <div className="absolute -top-5 -left-2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg">
              3
            </div>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold text-xl mb-4 text-center">
              BS Computer Science
            </h3>
            <div className="text-center space-y-2">
              <p className="text-blue-400 text-sm">
                National University of Sciences and Technology
              </p>
              <p className="text-green-400 text-sm">Islamabad</p>
              <p className="text-purple-400 text-sm mt-2">2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;