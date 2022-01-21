import { LockClosedIcon } from '@heroicons/react/solid'

const SignUpform = () => {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 ">
          <div>
            <img
              className="h-20 mx-auto "
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-6xl font-extrabold text-center text-gray-900">
              Creer un compte
              <span className="block pl-5 pr-5 text-indigo-600 xl:inline">
                Suluhisho-RH
              </span>
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm ">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Nom d'utilisateur
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none h-13 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nom"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Addresse email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none h-13 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Addresse mail"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Numero Tel
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none h-13 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Telephone"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Organisation
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none h-13 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Organisation"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-3 py-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Mot de passe"
                />
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
                  J'accepte les termes et conditions
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                ></a>
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
                Creer un compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default SignUpform
