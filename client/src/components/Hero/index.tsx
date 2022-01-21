const Hero = () => {
  return (
    <>
      <main className="px-10 py-40 bg-blue-100">
        <div className="sm:text-center lg:text-left">
          <h1 className="pb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline ">
              Avec
              <span className="block pl-5 pr-5 text-indigo-600 xl:inline">
                Suluhisho-RH
              </span>
              gérez le RH de votre business sans bouger de votre fauteuil. où
              que vous soyez.
              <br />
            </span>
          </h1>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            De l'offre d'emploi à la paie...
          </span>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"></p>
          <div className="mt-8 sm:mt-8 lg:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="pt-10 rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Comment ça marche
              </a>
            </div>
            <div className="pt-10 mt-3 border-2 sm:mt-0 sm:ml-3 ">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-6 text-base font-medium text-indigo-700 bg-indigo-100 border border-2 border-transparent border-indigo-600 rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Essai gratuit
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Hero
