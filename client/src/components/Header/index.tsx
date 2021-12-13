import backgroundImage from '../../img/m2.jpeg'
import job from '../../img/job.jpeg'
import logo from '../../img/logo.PNG'
import { JobCard, CategoryCard, Footer } from '../../Components'
const Header = () => {
  return (
    <>
      <div className="max-w-full ">
        <div className="sticky top-0 z-10 flex justify-between bg-white shadow-md">
          <div className="">
            <div className="p-3 ">
              <span className="text-2xl font-bold text-black mr-9">
                SuluhishoApp
              </span>
              <a
                href="#"
                className="mr-5 text-2xl font-light text-blue-900 hover:text-blue-900"
              >
                Home
              </a>
              <a
                href="#"
                className="mr-5 text-2xl font-light text-gray-500 hover:text-blue-900"
              >
                Employer
              </a>
              <a
                href="#"
                className="mr-5 text-2xl font-light text-gray-500 hover:text-blue-900"
              >
                Candidate
              </a>
              <a
                href="#"
                className="mr-5 text-2xl font-light text-gray-500 hover:text-blue-900"
              >
                Pages
              </a>
              <a
                href="#"
                className="text-2xl font-light text-gray-500 hover:text-blue-900"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex p-3">
            <div className="flex px-6 py-4 mr-3 text-white bg-blue-900 rounded-lg cursor-pointer text-md hover:bg-blue-800">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <a href="#">Login</a>
              </div>
            </div>
            <div className="flex px-6 py-4 text-lg text-white bg-blue-900 rounded-lg hover:bg-blue-800">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <div>
                <a href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div
            className="py-10 bg-cover shadow-md "
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="grid grid-cols-3 gap-2 ">
              <div className="col-span-2 py-10 px-7">
                <span className="font-bold text-white text-8xl ">
                  Recherchez parmi plus de 50 000 offres d'emploi.
                </span>
                <div className="flex mt-8 mb-10 border-4 shadow-md bord-gray-900 rounded-3xl">
                  <div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full px-6 py-6 border-r-2 text-1xl rounded-l-3xl focus:outline-none"
                      ></input>
                    </div>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full px-6 py-6 border-r-2 focus:outline-none text-1xl "
                      placeholder="Province"
                    ></input>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      className="w-full px-6 py-6 border-r-1 focus:outline-none text-1xl "
                      placeholder="Categories"
                    ></input>
                  </div>
                  <div>
                    <button className="block w-auto px-40 py-6 font-bold text-white bg-blue-900 rounded-r-3xl hover:bg-blue-800 text-1xl ">
                      Rechercher
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <JobCard />

            <div className="bg-gray-200">
              <div className="">
                <CategoryCard />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
