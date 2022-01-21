import backgroundImage from '../../img/m2.jpeg'
import job from '../../img/job.jpeg'
import logo from '../../img/logo.PNG'
import { JobCard, CategoryCard, Footer, Hero } from '../../Components'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { NavLink } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const Header = () => {
  const [showModal, setShowModal] = React.useState(false)
  let [searchParams, setSearchParams] = useSearchParams()
  let activeStyle = {
    textDecoration: 'underline',
  }

  let activeClassName = 'underline'

  return (
    <>
      <div className="header-2">
        <nav className="py-2 bg-white md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex items-center justify-between ">
              <a href="/" className="text-3xl font-bold text-indigo-600 mr-9">
                Suluhisho-RH
              </a>
            </div>

            <div
              className="flex-col hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0"
              id="navbar-collapse"
            >
              <NavLink
                className="p-2 text-gray-600 rounded lg:px-4 md:mx-2"
                to="/"
              >
                Acceuil
              </NavLink>
              <NavLink
                className="p-2 text-gray-600 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-200 hover:text-gray-700"
                to="/about"
              >
                Apropos de Suluhisho-RH
              </NavLink>
              <NavLink
                to="/pricing"
                className="p-2 text-gray-600 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-200 hover:text-gray-700"
              >
                Achetez Suluhisho
              </NavLink>

              <NavLink
                to="/post"
                className="p-2 text-gray-600 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-200 hover:text-gray-700"
              >
                Publiez une annonce
              </NavLink>
              <NavLink
                to="/contact"
                className="p-2 text-gray-600 transition-colors duration-300 rounded lg:px-4 md:mx-2 hover:bg-gray-200 hover:text-gray-700"
              >
                Contactez-Nous
              </NavLink>
              <NavLink
                to="/login"
                className="p-2 text-center text-indigo-600 transition-colors duration-300 border border-transparent rounded lg:px-4 md:mx-2 hover:bg-indigo-100 hover:text-indigo-700"
              >
                Se connecter
              </NavLink>
              <NavLink
                to="/signUp"
                className="p-2 mt-1 text-center text-indigo-600 transition-colors duration-300 border border-indigo-600 border-solid rounded lg:px-4 md:mx-2 hover:bg-indigo-600 hover:text-white md:mt-0 md:ml-1"
              >
                Creer un compte
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Header
