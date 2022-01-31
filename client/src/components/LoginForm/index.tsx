import { LockClosedIcon } from '@heroicons/react/solid'
import { Formik } from 'formik'
import * as Yup from 'yup'
const validationSchema = Yup.object({
  email: Yup.string()
    .required('Le champ e-mail est obligatoire')
    .email('Veuillez fournir un email valide'),
  password: Yup.string().required('Le champ password est obligatoire'),
})
type loginProps = {
  handleLogin?: any
}
const Loginform = ({ handleLogin }: loginProps) => {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-12 bg-indigo-50 sm:px-6 lg:px-8">
        <div className="space-y-8 ">
          <div>
            <img
              className="h-20 mx-auto "
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-6xl font-extrabold text-center text-gray-900">
              Se connecter a
              <span className="block pl-5 pr-5 text-indigo-600 xl:inline">
                Suluhisho-RH
              </span>
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Ou{' '}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                essayer gratuitement pendant 14jours
              </a>
            </p>
          </div>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values) => handleLogin(values)}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm ">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Addresse email
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={handleChange}
                      value={values.email}
                      className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none h-13 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Addresse mail"
                    />
                    {errors.email && (
                      <span className="font-bold text-red-600 text-md">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Mot de passe
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={values.password}
                      autoComplete="current-password"
                      className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Mot de passe"
                    />
                    {errors.password && (
                      <span className="font-bold text-red-600 text-md">
                        {errors.password}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="block ml-2 text-sm text-gray-900"
                    >
                      Se souvenir de moi
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Mot de passe oublie ?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="relative flex justify-center w-full px-4 py-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="w-5 h-20 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Connexion
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
export default Loginform
