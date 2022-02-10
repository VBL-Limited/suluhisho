const CategoryCard = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center py-5">
          <span className="text-4xl font-bold text-gray-600">
            Catégories d'emploi
          </span>
          <p className="text-md text=slate-700 px-20 py-10">
            ext ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-4 gap-3 p-8 mt-5 ml-6 mr-6 drop-shadow-md bg-white-100 ">
            <div className="flex flex-col items-center justify-center py-4 transition duration-500 transform bg-white cursor-pointer rounded-2xl hover:scale-110">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#0c4a6e"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <span className="font-sans text-gray-500 hover:text-white text-1xl">
                Comptabilité et finance
              </span>
              <span className="p-3 mt-2 text-sm font-bold text-white bg-indigo-600 rounded-md hover:text-white">
                1200 emplois
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 transition duration-500 transform bg-white rounded-2xl hover:scale-110">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#0c4a6e"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <span className="font-sans text-gray-500 text-1xl ">
                Technologies
              </span>
              <span className="p-3 mt-2 text-sm font-bold text-white bg-indigo-600 rounded-md">
                1200 emplois
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 transition duration-500 transform bg-white rounded-2xl hover:scale-110">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#0c4a6e"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>

              <span className="font-sans text-gray-500 text-1xl">ONG</span>
              <span className="p-3 mt-2 text-sm font-bold text-white bg-indigo-600 rounded-md">
                1200 emplois
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 transition duration-500 transform bg-white rounded-2xl hover:scale-110">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0c4a6e"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <span className="font-sans text-gray-500 text-1xl">
                ingénierie et industrie
              </span>
              <span className="p-3 mt-2 text-sm font-bold text-white bg-indigo-600 rounded-md">
                1200 emplois
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}
export default CategoryCard
