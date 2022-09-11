import { Section } from "../atoms";

export const ProjetoSection = () => {
  return (
    <>
      <div className="bg-backGround ">
        <Section>
          <div className="text-white border-t border-b border-gray-100 border-opacity-20 flex flex-col justify-center items-center max-w-7xl pb-16  mx-auto sm:px-6 lg:px-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              className="mx-auto max-w-7xl py-16 px-4  sm:px-6 lg:px-8"
            >
              <div className="text-center">
                <h2 className="text-lg font-semibold text-primary-orange">
                  Sobre
                </h2>
                <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Um pouco sobre mim
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <div className="vidro p-10 ">

                </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
