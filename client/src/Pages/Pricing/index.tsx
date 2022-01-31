const Pricing = () => {
  return (
    <>
      <div className="w-full pt-8 mt-10 bg-blue">
        <div className="flex flex-col justify-center mb-6 sm:flex-row sm:mb-0">
          <div className="flex flex-col mt-4 bg-white border-2 rounded-lg sm:flex-1 lg:flex-initial lg:w-1/4">
            <div className="p-8 text-3xl font-bold text-center text-indigo-600">
              Free
            </div>
            <div className="text-sm border-0 border-t border-solid border-grey-light">
              <div className="py-4 text-center border-0 border-b border-solid border-grey-light">
                Statut de l'emploi
              </div>
              <div className="py-4 text-center border-0 border-b border-solid border-grey-light">
                Postuler pour un emploi et le
              </div>
              <div className="pt-10 rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Acheter
                </a>
              </div>
            </div>
            <div className="mt-8 mt-auto mb-8 text-center">
              <a
                href="#"
                className="inline-block px-6 py-4 text-white rounded bg-green hover:bg-green-darker hover:text-white hover:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="z-30 flex flex-col flex-1 mt-4 bg-indigo-600 border-2 border-indigo-600 rounded-lg shadow-lg lg:flex-initial lg:w-1/4 sm:-mt-4">
            <div className="w-full p-8 text-4xl font-bold text-center text-white">
              Basic
            </div>
            <div className="w-full text-sm border-0 border-t border-solid border-grey-light">
              <div className="py-4 font-semibold text-center text-white border-0 border-b border-solid text-md border-grey-light">
                Offres d'emploi illimitées
              </div>
              <div className="py-4 text-center text-white border-0 border-b border-solid text-md font-semiboldtext-center border-grey-light">
                Gestion de paie
              </div>
              <div className="py-4 text-center text-white border-b border-solid text-md font-semiboldborder-0 border-grey-light">
                Gestion taxes
              </div>
              <div className="py-4 font-semibold text-center text-white border-0 border-b border-solid text-md border-grey-light">
                Gestions des offres d'emplois
              </div>
              <div className="py-4 text-center border-0 border-b border-solid border-grey-light"></div>
              <div className="py-4 text-center text-white border-0 border-b border-solid text-md font-semiboldtext-center border-grey-light">
                Gestion des tâches
              </div>
            </div>
            <div className="w-full px-8 pt-8 mt-auto text-3xl font-semibold text-center text-white">
              $30.99
            </div>
            <div className="pt-10 rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-6 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:text-white hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Acheter
              </a>
            </div>
            <div className="w-full mt-auto mb-8 text-center">
              <a
                href="#"
                className="inline-block px-6 py-4 text-white rounded bg-green hover:bg-green-darker hover:text-white hover:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1 mt-4 bg-white border-2 rounded-lg lg:flex-initial lg:w-1/4">
            <div className="p-8 text-3xl font-bold text-center text-indigo-600">
              Pro
            </div>
            <div className="text-sm border-0 border-t border-solid border-grey-light">
              <div className="py-4 text-center border-0 border-b border-solid border-grey-light">
                Unlimited Ice Creams
              </div>
              <div className="py-4 text-center border-0 border-b border-solid border-grey-light">
                Unlimited Cones
              </div>
              <div className="py-4 text-center border-0 border-b border-solid border-grey-light">
                Unlimited toppings
              </div>
              <div className="py-4 text-center border-0 border-b border-solid border-grey-light">
                Analytics
              </div>
            </div>
            <div className="px-8 pt-8 mt-auto text-xl text-center">
              $50.99
              <span className="italic line-through text-grey-light">$9.99</span>
            </div>

            <div className="pt-10 rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Acheter
              </a>
            </div>
            <div className="pt-8 mt-auto mb-8 text-center">
              <a
                href="#"
                className="inline-block px-6 py-4 text-white rounded bg-green hover:bg-green-darker hover:text-white hover:no-underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Pricing
