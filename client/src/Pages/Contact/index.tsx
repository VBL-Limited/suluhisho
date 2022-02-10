const Contact = () => {
  return (
    <>
      <div className="py-5 bg-indigo-600 md:py-7 lg:py-14">
        <div className="container px-5 mx-auto xl:max-w-screen-xl">
          <h1 className="text-3xl font-bold text-center text-white md:text-4xl">
            Contactez-nous!
          </h1>
          <p className="max-w-lg mx-auto mt-2.5 text-center text-gray-100 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sodales interdum sapien non pretium.
          </p>
          <div className="mt-5 md:mt-7 lg:mt-14">
            <div className="flex justify-center">
              <div className="space-y-5 sm:max-w-screen-sm sm:w-full sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-5 md:gap-7">
                <div className="flex items-center sm:flex-col sm:text-center">
                  <div className="flex items-center justify-center flex-shrink-0 mr-5 bg-white rounded w-11 h-11 sm:mr-0">
                    <svg
                      className="text-indigo-600 w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="break-all text-white sm:mt-2.5">
                    23 Av du Volcan Nord-Kivu,Goma/DR.Congo
                  </div>
                </div>
                <div className="flex items-center sm:flex-col sm:text-center">
                  <div className="flex items-center justify-center flex-shrink-0 mr-5 bg-white rounded w-11 h-11 sm:mr-0">
                    <svg
                      className="text-blue-600 w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                  </div>
                  <div className="break-all text-white sm:mt-2.5">
                    +243 94132965
                  </div>
                </div>
                <div className="flex items-center sm:flex-col sm:text-center">
                  <div className="flex items-center justify-center flex-shrink-0 mr-5 bg-white rounded w-11 h-11 sm:mr-0">
                    <svg
                      className="text-indigo-600 w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                    </svg>
                  </div>
                  <div className="break-all text-white sm:mt-2.5">
                    info@suluhisho-rh.com
                  </div>
                </div>
              </div>
            </div>
            <form className="w-full max-w-[600px] mx-auto space-y-5 mt-5 p-5 rounded-lg shadow-md border-2 bg-white md:mt-7">
              <label className="block">
                <p>Nom</p>
                <div className="relative flex items-center mt-2.5 group text-gray-400 focus-within:text-blue-600">
                  <svg
                    className="absolute w-6 h-6 pointer-events-none left-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  <input
                    className="w-full py-3 pl-16 pr-5 border border-gray-200 rounded outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:text-black"
                    type="text"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </label>
              <label className="block">
                <p>E-mail</p>
                <div className="relative flex items-center mt-2.5 group text-gray-400 focus-within:text-blue-600">
                  <svg
                    className="absolute w-6 h-6 pointer-events-none left-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                  </svg>
                  <input
                    className="w-full py-3 pl-16 pr-5 border border-gray-200 rounded outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600 focus:text-black"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </label>
              <label className="block">
                <p>Telephone:</p>
                <div className="relative flex items-center mt-2.5 group text-gray-400 focus-within:text-indigo-600">
                  <svg
                    className="absolute w-6 h-6 pointer-events-none left-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  <input
                    className="w-full py-3 pl-16 pr-5 border border-gray-200 rounded outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:text-black"
                    type="text"
                    placeholder="+243 994 537 890"
                    required
                  />
                </div>
              </label>
              <label className="block">
                <p>Message</p>
                <textarea
                  className="w-full mt-2.5 px-5 py-3 rounded border border-gray-200 outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 focus:text-black"
                  required
                ></textarea>
              </label>
              <button className="w-full px-5 py-3 font-medium text-white bg-indigo-600 rounded focus:outline-none">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
