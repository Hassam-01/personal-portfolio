const Education = () => {
  return (
    <div className="p-8 text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">
          Education Journey
        </h2>
        <div className="w-full flex justify-center">
          <div className="space-y-12 relative">
            {/* Timeline line with steps */}
            <div className="h-[600px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500">
              {/* Step 1 */}
              <div className="absolute right-0 border-2 md:w-56 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 top-8">
                <div className="absolute -left-4 -top-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg transition-all duration-300 transform hover:scale-110">
                  1
                </div>
                <div className="right-1/4 top-5 absolute flex items-start mt-4 bg-gray-800 rounded-lg px-6 py-6 w-72 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex-1 space-y-4 group">
                    <h3 className="text-blue-400 font-semibold text-xl text-center">
                      Matriculation
                    </h3>
                    <div className="hidden group-hover:block text-center space-y-2">
                      <p className="text-blue-500 text-sm">
                        Public School and College
                      </p>
                      <p className="text-green-400 text-sm">Skardu</p>
                      <p className="text-purple-400 text-sm mt-2">2018 - 2020</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="absolute left-0 md:w-56 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 top-52">
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg transition-all duration-300 transform hover:scale-110">
                  2
                </div>
                <div className="left-1/4 top-5 absolute flex items-start mt-4 bg-gray-800 rounded-lg px-6 py-6 w-72 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex-1 space-y-4 group">
                    <h3 className="text-blue-400 font-semibold text-xl text-center">
                      FSc Pre-Medical
                    </h3>
                    <div className="hidden group-hover:block text-center space-y-2">
                      <p className="text-blue-500 text-sm">
                        Fauji Foundation College, New Lalazar
                      </p>
                      <p className="text-green-400 text-sm">Rawalpindi</p>
                      <p className="text-purple-400 text-sm mt-2">2020 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="absolute right-0 md:w-56 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 top-96">
                <div className="absolute -left-4 -top-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold z-10 shadow-lg transition-all duration-300 transform hover:scale-110 text-blue-400">
                  3
                </div>
                <div className="right-1/4 top-5 absolute flex group items-start mt-4 bg-gray-800 h-16 hover:h-48 rounded-lg px-6 py-6 w-72 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="flex-1 space-y-4 ">
                    <h3 className="text-blue-400 font-semibold text-xl text-center">
                      BS Computer Science
                    </h3>
                    <div className="hidden group-hover:block text-center space-y-2">
                      <p className="text-blue-500 text-sm">
                        National University of Sciences and Technology
                      </p>
                      <p className="text-gray-400 text-sm">Islamabad</p>
                      <p className="text-purple-400 text-sm mt-2">2023 - Present</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
