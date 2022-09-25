import { NextPage } from "next"

const Page404: NextPage = ()  => {
    return (
        <>
        <div className="fixed  bg-zinc-400 dark:bg-backGround w-screen h-full bottom-0 top-0 left-0 right-0 -z-10 ">
          <div>
            <div className="ball1 "></div>
            <div className="ball2"></div>
            <div className="ball3"></div>
          </div>
      </div>
          <main
            className="h-screen backdrop-blur-md w-screen flex justify-center items-center    overflow-hidden  "
          >
            <div className="max-w-7xl absolute border mx-auto text-center p-8 py-16 rounded-xl  ">
              <p className=" font-semibold text-primary-orange text-8xl">404</p>
              <h1 className="mt-2 text-4xl font-bold text-white tracking-tight sm:text-5xl sm:tracking-tight">
                Pagina não encontrada
              </h1>
              <p className="mt-2 text-lg font-medium text-black text-opacity-50">
                A pagina que você está procurando não existe ou foi removida.
              </p>
            </div>
          </main>
        </>
      )
}

export default Page404;