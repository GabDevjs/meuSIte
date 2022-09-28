import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { Section } from "../atoms";
import ImageWhatsAppPixel from "../../assets/whatsapp-iconBit.png";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div id="contato" className="bg-zinc-300 dark:bg-[#202025] z-50">
           

      <Section>
        <div className=" border-b border-gray-900 dark:border-zinc-700 border-opacity-20 text-gray-800 dark:text-gray-100 pt-10 flex flex-col justify-center items-center max-w-7xl  mx-auto sm:px-6 lg:px-8 ">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8"
          >
            <div className="text-center">
              <h2 className="text-lg font-semibold text-primary-orange">
                Contato e redes
              </h2>
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
              <div className="flex justify-center drop-shadow-2xl shadow-zinc-900 dark:shadow-zinc-100 items-center py-16 px-14 sm:px-28 xl:px-32
               ">
                <Image
                  src={ImageWhatsAppPixel}
                  alt="Whatsapp icon"
                  className="w-full h-full animate-fluid  "
                  priority
                />
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
              <p className="text-center text-xs px-5 sm:px-0 sm:text-base leading-relaxed ">
                Estou interessado em oportunidades freelance – especialmente
                projetos ambiciosos ou grandes. No entanto, se você tiver outra
                solicitação ou pergunta, não hesite em me chamar.
              </p>
              <div className="flex justify-center items-center py-10">
                <Link
               
                href='https://wa.me/5511981154749?text=Olá,%20Flavio!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.'
                >
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
