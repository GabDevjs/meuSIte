import Image from "next/image";
import ImageABout from "../../assets/PerfilRedesJobbs.jpeg";
import { Button, Section } from "../atoms";
import { BsFileEarmarkPdf } from  'react-icons/bs'
import { useRouter } from "next/router";

const urlDonload = '../../assests/CurrículoFlavioGabrielDEV.pdf'

export const About = () => {
  return (
    <div id="sobre" className="bg-zinc-300 dark:bg-zinc-900  ">
      <Section>
        <div className="text-gray-800 dark:text-gray-100 flex flex-wrap justify-between items-center max-w-6xl pb-16  mx-auto sm:px-4 lg:px-6">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            className="mx-auto max-w-6xl py-16 px-2  sm:px-4 lg:px-6"
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
          <div className="mx-3 flex justify-center flex-wrap items-center space-y-10">
            <div
              data-aos="fade-right"
              data-aos-duration="900"
              className="flex justify-center text-sm max-w-lg flex-col space-y-8"
            >
              <p className="text-center max-w-lg">
                Sou um dedicado estudante de desenvolvimento, no início do que
                pretendo ser uma longa e bem-sucedida carreira, pela qual sou
                apaixonado, possuo 1 ano de experiência em Javascript, HTML/Css,
                React e NodeJs, programando diferentes tipos de aplicações para
                clientes locais, e para diversas plataformas freelancer, criando
                desde simples blogs e Landing Pages ate mesmo e-commerce sempre
                focado em otimizar o Ux, e tornar os aplicativos mais fluidos e
                otimizados, com o máximo de qualidade.
                <br />
                <br />
                Na sua empresa, procuro a oportunidade de criar melhores web
                application valorizando a experiência do usuário, com
                responsabilidade e comprometimento.
              </p>

              <div className="flex justify-center  items-center ">
                <Button 
                name="Meu Curriculo"
                className="bg-primary-orange  px-10 py-3 flex justify-between items-center custom-btn btn-12"

                >
                  <BsFileEarmarkPdf className="inline text-white  "/>
                </Button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              className="flex justify-center items-center my-10 md:my-0 text-lg max-w-lg "
            >
              <div className="flex justify-center items-center px-24">
                <Image
                  src={ImageABout}
                  className="w-full h-full rounded-xl rounded-tl-3xl rounded-br-3xl "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
