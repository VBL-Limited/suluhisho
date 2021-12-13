import backgroundImage from '../../img/m2.jpeg'
import job from '../../img/job.jpeg'
import logo from '../../img/logo.PNG'
const JobCard = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="flex justify-between p-3 mt-6 text-white bg-blue-900 border-2 border-gray-600 rounded-md shadow-md w-3/2">
            <a
              href="#"
              className="px-8 py-3 font-semibold text-white bg-blue-900 rounded-sm hover:bg-white hover:text-blue-900 text-md"
            >
              Dernières offres d'emploi
            </a>
            <a
              href="#"
              className="px-8 py-3 font-semibold text-white bg-blue-900 rounded-sm text-md hover:bg-white hover:text-blue-900"
            >
              Offres d'emplois récents
            </a>
          </div>
        </div>
        {/* //Card */}
        <div className="mb-5">
          <div className="grid grid-cols-4 gap-2 p-8 mt-10 ml-6 mr-6 drop-shadow-md bg-white-100 ">
            <div className="ml-6 transition duration-500 transform bg-white shadow-2xl hover:shadow-4xl rounded-2xl hover:scale-110">
              <div className="flex justify-between p-4 ">
                <span className="px-2 py-2 font-sans text-sm text-blue-900 bg-blue-200 rounded-md">
                  À temps plein
                </span>
                <div className="flex">
                  <span className="px-2 py-2 font-mono text-sm text-red-700 bg-red-300 rounded-md">
                    12/09/20
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div>
                  <img src={job} />
                </div>
                <span className="text-2xl font-bold text-blue-900">
                  Developeur web
                </span>
                <p className="px-4 py-4 text-gray-500">
                  Creer un site web pour l'organization.
                </p>
                <button className="w-full py-3 text-white bg-blue-900 rounded-lg hover:bg-blue-800">
                  Postuler
                </button>
              </div>
            </div>

            <div className="ml-6 transition duration-500 transform shadow-2xl rounded-2xl hover:scale-110">
              <div className="flex justify-between p-4 ">
                <span className="px-2 py-2 font-sans text-sm text-blue-900 bg-blue-200 rounded-md">
                  À temps plein
                </span>
                <div className="flex">
                  <span className="px-2 py-2 font-mono text-sm text-red-700 bg-red-300 rounded-md">
                    12/09/20
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div>
                  <img src={job} />
                </div>
                <span className="text-2xl font-bold text-blue-900">
                  Developeur web
                </span>
                <p className="px-4 py-4 text-gray-500">
                  Creer un site web pour l'organization.
                </p>
                <button className="w-full py-3 text-white bg-blue-900 rounded-lg hover:bg-blue-800">
                  Postuler
                </button>
              </div>
            </div>
            <div className="ml-6 transition duration-500 transform shadow-2xl rounded-2xl hover:scale-110">
              <div className="flex justify-between p-4 ">
                <span className="px-2 py-2 font-sans text-sm text-blue-900 bg-blue-200 rounded-md">
                  A temps partiel
                </span>
                <div className="flex">
                  <span className="px-2 py-2 font-mono text-sm text-red-700 bg-red-300 rounded-md">
                    12/09/20
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2">
                <div>
                  <img src={job} />
                </div>
                <span className="text-2xl font-bold text-blue-900">
                  Developeur web
                </span>
                <p className="px-4 py-4 text-gray-500">
                  Creer un site web pour l'organization.
                </p>
                <button className="w-full py-3 text-white bg-blue-900 rounded-lg hover:bg-blue-800">
                  Postuler
                </button>
              </div>
            </div>
            <div className="ml-6 transition duration-500 transform shadow-2xl rounded-2xl hover:scale-110 ">
              <div className="flex justify-between p-4">
                <span className="px-2 py-2 font-sans text-sm text-blue-900 bg-blue-200 rounded-md">
                  A temps partiel
                </span>
                <div className="flex">
                  <span className="px-2 py-2 font-mono text-sm text-green-700 bg-green-300 rounded-md">
                    12/09/20
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div>
                  <img src={job} />
                </div>
                <span className="text-2xl font-bold text-blue-900">
                  Developeur web
                </span>
                <p className="px-4 py-4 text-gray-500">
                  Creer un site web pour l'organization.
                </p>
                <button className="w-full py-3 text-white bg-blue-900 rounded-lg hover:bg-blue-800">
                  Postuler
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button className="px-8 py-5 font-bold text-white duration-300 bg-blue-900 rounded-md hover:shadow-xl hover:bg-blue-800">
              Parcourir tous les emplois
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default JobCard
