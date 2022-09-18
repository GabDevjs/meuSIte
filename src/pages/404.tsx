import { NextPage } from "next"

const Page404: NextPage = ()  => {
    return (
        <>
         
          <div
            className="min-h-full bg-cover bg-top sm:bg-top"
          >
            <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
              <p className="text-base font-semibold text-black text-opacity-50">404</p>
              <h1 className="mt-2 text-4xl font-bold text-white tracking-tight sm:text-5xl sm:tracking-tight">
                Uh oh! I think youre lost.
              </h1>
              <p className="mt-2 text-lg font-medium text-black text-opacity-50">
                It looks like the page youre looking for doesnt exist.
              </p>
            </div>
          </div>
        </>
      )
}

export default Page404;