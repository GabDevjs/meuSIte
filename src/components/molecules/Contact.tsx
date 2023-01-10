import { BsWhatsapp, BsTelephoneOutboundFill } from "react-icons/bs";
import { Section } from "../atoms";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div id="contato" className="z-50">
      <Section>
        <div className=" text-zinc-50  text-gray-800 dark:text-gray-100 py-20 flex flex-col justify-center items-center max-w-7xl  md:mx-auto sm:px-6 lg:px-8 ">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            className="md:mx-auto max-w-7xl px-4  sm:px-6 lg:px-8"
          >
            <div className="text-center">
              <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Entre em contato
              </p>
            </div>
          </div>
          <div className="mx-3 flex justify-center flex-wrap items-center">
            <div
              data-aos="zoom-in"
              data-aos-duration="1100"
              className="flex justify-center items-center  text-lg max-w-xl "
            >
              <div
                className="flex justify-center drop-shadow-2xl shadow-zinc-900 dark:shadow-zinc-100 items-center py-16 sm:px-28 xl:px-32"
              >
                <div className="bg-degrade w-60 h-60 rounded-full flex justify-center items-center">
                  <BsTelephoneOutboundFill className="w-28 h-28 text-neutral-900"/>
                </div> 
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="900"
              className="flex justify-center text-base max-w-xl flex-col"
            >
              <div className="flex justify-center text-2xl font-semibold">
                <h1> Whatsapp</h1>
              </div>
              <p className="text-center text-xs px-5 sm:px-0 sm:text-base leading-relaxed max-w-sm">
                disponivel para ajudar você a realizar seus sonhos e metas de
                vida. atendimento todos os dias da semana das 8h a 20h. Ta precisando de um site? vem de zap!!
              </p>
              <div className="flex justify-center items-center py-10">
                <Link href="https://wa.me/5511981154749?text=Olá,%20Flavio!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.">
                  <a
                    aria-label="Whatsapp"
                    className="  custom-btn  btn-11 px-5 rounded-lg py-2 lg:py-3 bg-[#25d366] hover:shadow-xl ring-2  hover:shadow-primary-green border-2  border-zinc-200  ring-primary-green dark:border-zinc-900  hover:bg-secondy-green hover:scale-110 ease-in-out transition-all duration-300"
                    target="_blank"
                  >
                    <span>
                      <BsWhatsapp className="inline lg:mr-2 text-lg" />
                    </span>
                    <span className="text-sm lg:text-base">Whatsapp</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
