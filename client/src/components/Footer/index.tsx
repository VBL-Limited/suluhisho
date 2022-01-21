const Footer = () => {
  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 text-gray-600">
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
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
