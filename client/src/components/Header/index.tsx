import backgroundImage from '../../img/m2.jpeg'
import job from '../../img/job.jpeg'
import logo from '../../img/logo.PNG'
import { JobCard, CategoryCard, Footer } from '../../Components'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
const Header = () => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <div className="header-2">
        <nav className="py-2 bg-white md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex items-center justify-between ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <a
                href="/home"
                className="text-2xl font-bold text-indigo-600 mr-9"
              >
                Suluhisho-RH
              </a>
            </div>

            <div
              className="flex-col hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0"
              id="navbar-collapse"
            >
              <a
                href="/home"
                className="p-2 text-white bg-indigo-600 rounded lg:px-4 md:mx-2"
              >
                Acceuil
              </a>
              <a
                href="/about"
                className="p-2 text-gray-600 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-200 hover:text-gray-700"
              >
                Apropos de Suluhisho-RH
              </a>
              <a
                href="/pricing"
                className="p-2 text-gray-600 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-200 hover:text-gray-700"
              >
                Achetez Suluhisho
              </a>

              <a
                href="/contact"
                className="p-2 text-gray-600 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-200 hover:text-gray-700"
              >
                Contactez-Nous
              </a>
              <a
                href="/login"
                className="p-2 text-center text-indigo-600 transition-colors duration-300 border border-transparent rounded lg:px-4 md:mx-2 hover:bg-indigo-100 hover:text-indigo-700"
              >
                Se connecter
              </a>
              <a
                href="/signUp"
                className="p-2 mt-1 text-center text-indigo-600 transition-colors duration-300 border border-indigo-600 border-solid rounded lg:px-4 md:mx-2 hover:bg-indigo-600 hover:text-white md:mt-0 md:ml-1"
              >
                Creer un compte
              </a>
            </div>
          </div>
        </nav>

        <div className="py-6 bg-indigo-100 md:py-12">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="mb-2 text-3xl font-medium md:text-4xl">
                Get the header you needed for your awesome website.
              </h1>
              <button className="px-6 py-2 mt-6 text-xl text-white bg-indigo-600 rounded-full">
                Get Started
              </button>
              <div className="mt-4">
                {/* Het   <img src="//via.placeholder.com/1000x785/fff?text=iMac+Mockup" alt="mockup" className="max-w-full rounded shadow-md d-block"> */}
              </div>
            </div>

            <div className="mt-6 md:flex md:flex-wrap md:-mx-4 md:mt-12">
              <div className="mt-8 text-center md:w-1/3 md:px-4 xl:px-6 md:mt-0">
                <span className="inline-block w-20 mb-3 border-t-2 border-indigo-200 border-solid"></span>
                <h5 className="mb-4 text-xl font-medium uppercase">
                  Fresh Design
                </h5>
                <p className="text-gray-600">
                  FWR blocks bring in an air of fresh design with their creative
                  layouts and blocks, which are easily customizable
                </p>
              </div>

              <div className="mt-8 text-center md:w-1/3 md:px-4 xl:px-6 md:mt-0">
                <span className="inline-block w-20 mb-3 border-t-2 border-indigo-200 border-solid"></span>
                <h5 className="mb-4 text-xl font-medium uppercase">
                  Clean Code
                </h5>
                <p className="text-gray-600">
                  FWR blocks are the cleanest pieces of HTML blocks, which are
                  built with utmost care to quality and usability.
                </p>
              </div>

              <div className="mt-8 text-center md:w-1/3 md:px-4 xl:px-6 md:mt-0">
                <span className="inline-block w-20 mb-3 border-t-2 border-indigo-200 border-solid"></span>
                <h5 className="mb-4 text-xl font-medium uppercase">
                  Perfect Tool
                </h5>
                <p className="text-gray-600">
                  FWR blocks is a perfect tool for designers, developers and
                  agencies looking to create stunning websites in no time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header
