import job from '../../img/job.jpeg'
import { useState } from 'react'
import { Jobs } from '../../constants/stub'
import { Jobstype } from '../../types'
type jobTypes = {
  jobs?: any
  handleApply?: any
}
const JobCard = ({ jobs, handleApply }: jobTypes) => {
  const [currentOffer, setCurrentOffer] = useState(true)

  const handleJobOffers = () => {
    setCurrentOffer(false)
  }
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="w-full py-40 bg-indigo-600 rounded-md">
            <div className="flex-col justify-center">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Ville ou code postal"
                  className="w-1/3 h-16 mr-2 rounded-lg"
                />
                <input
                  type="text"
                  className="w-1/3 h-16 mr-2 rounded-lg"
                  placeholder="Metier,Mots cles ou entreprise"
                />
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-700 md:py-3 md:text-lg md:px-10 hover:text-white"
                  >
                    Trouver un emploi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //Card */}
        <div className="">
          <div className="grid grid-cols-4 gap-3 p-8 drop-shadow-md bg-white-100 bg-indigo-50 ">
            {jobs &&
              jobs.map(
                ({
                  _id,
                  email,
                  nom_organisation,
                  details_offre,
                  date_limite,
                  lieu_affectation,
                  poste,
                  date_publication,
                }: Jobstype) => (
                  <div
                    key={_id}
                    className="transition duration-500 transform bg-white shadow-2xl hover:shadow-4xl rounded-2xl hover:scale-110"
                  >
                    <div className="flex justify-between p-4 ">
                      <span className="px-2 py-2 font-sans text-sm text-blue-900 bg-blue-200 rounded-md">
                        {poste}
                      </span>
                      <div className="flex">
                        <span className="px-2 py-2 font-mono text-sm text-red-700 bg-red-300 rounded-md">
                          {date_limite}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                      <div>
                        <img src={job} className="h-10" />
                      </div>
                      <span className="text-xl font-bold text-indigo-600">
                        {poste}
                      </span>
                      <p className="px-4 py-4 text-gray-500">
                        {nom_organisation}
                      </p>
                      <button
                        className="w-full py-3 font-mono text-indigo-600 uppercase bg-white border-2 border-blue-900 rounded-lg font-bolg hover:text-white hover:bg-blue-800"
                        onClick={() => handleApply(_id)}
                      >
                        Postuler
                      </button>
                    </div>
                  </div>
                ),
              )}
          </div>
          <div className="flex justify-center mt-1 mb-20">
            <button className="px-8 py-5 font-bold text-white duration-300 bg-indigo-600 border-2 rounded-md hover:border-blue-900 hover:border-2 hover:text-blue-900 hover: hover:shadow-xl hover:bg-white">
              Parcourir tous les emplois
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default JobCard
