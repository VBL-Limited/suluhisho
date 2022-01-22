const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100">
          <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-500 sm:text-left">
              © 2021 Suluhisho App —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="ml-1 text-gray-600"
                target="_blank"
              >
                @2021
              </a>
            </p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"></span>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
