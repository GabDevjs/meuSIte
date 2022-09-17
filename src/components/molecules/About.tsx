import Image from "next/image";
import ImageABout from "../../assets/PerfilRedesJobbs.jpeg";
import { Button, Section } from "../atoms";
import {
  BsBack,
  BsFileEarmarkPdf,
  BsFillBriefcaseFill,
  BsGraphUp,
  BsInfoCircleFill,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";

const cv = "/CurrículoFlavioGabrielDEV.pdf";

const itemsABoutBar = [
  {
    title: "Sobre",
    icon: BsInfoCircleFill,
    type: "0",
  },
  {
    title: "Historia",
    icon: BsJournalBookmarkFill,
    type: "1",
  },
  {
    title: "Skills",
    icon: BsFillBriefcaseFill,
    type: "2",
  },
];

const files = [
  {
    title: "Javascript",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  },
  {
    title: "Html",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    title: "Css",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },

  {
    title: "Next",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    title: "React",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    title: "vue",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
  },
  {
    title: "Git",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain-wordmark.svg",
  },
  {
    title: "Npm",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",
  },
  {
    title: "Yarn",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original-wordmark.svg",
  },
  {
    title: "Adonis",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/adonisjs/adonisjs-original.svg",
  },
  {
    title: "Node",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    title: "Mysql",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain-wordmark.svg",
  },
];

const services = [
  {
    title: "Desenvolvimento Web Front-End",
    description:
      "Desenvolvimento de sites e sistemas web, utilizando as melhores tecnologias do mercado para garantir a melhor experiência para o usuário.",
    icon: FaUserAlt,
  },
  {
    title: "Desenvolvimento Web back-End",
    description:
      "Desenvolvimento de sites e sistemas web, utilizando as melhores tecnologias do mercado para garantir a melhor experiência para o usuário.",
    icon: BsBack,
  },
  {
    title: "Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativos mobile, utilizando as melhores tecnologias do mercado para garantir a melhor experiência para o usuário.",
    icon: MdOutlineDeveloperMode,
  },
];

export const About = () => {
  const [itemAbout, setItemAbout] = useState("0");

  return (
    <div
      id="sobre"
      className="bg-zinc-200 dark:bg-zinc-900 py-10 px-2 sm:px-4 lg:px-6 "
    >
      <section className="flex justify-center h-full w-full py-5 flex-col md:flex-row ">
        <div className="lg:text-center flex justify-center md:justify-start dark:bg-zinc-600  bg-zinc-400 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl py-1 md:py-14 md:pl-5 px-2  ">
          {itemsABoutBar.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="zoom-in"
                className="h-10 group flex justify-center  cursor-pointer text-zinc-800 dark:text-gray-100 text-sm font-bold pl-2 pr-4"
                onClick={() => setItemAbout(item.type)}
              >
                <a className="flex z-20 justify-start items-center">
                  <item.icon className="text-lg  mr-1" />
                  <h3 className="text-base group-hover:scale-105 transition-all duration-300 ">
                    {item.title}
                  </h3>
                </a>
                <div
                  className={` hidden md:inline pl-2 pr-4 rounded-l-lg  absolute w-32  group-hover:translate-x-0 transition-transform text-gray-800 bg-zinc-300 duration-500 dark:bg-zinc-800  h-10 ${
                    itemAbout == item.type ? "translate-x-0" : "translate-x-44"
                  }`}
                ></div>
                <div
                  className={`inline md:hidden pl-2 pr-4 rounded-t-lg  absolute w-full  group-hover:translate-y-0 transition-transform text-gray-800 bg-zinc-300 duration-500 dark:bg-zinc-800  h-12 ${
                    itemAbout == item.type ? "translate-y-0 " : "translate-y-12"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="text-gray-800 bg-zinc-300 bg-opacity-90 dark:bg-zinc-800 dark:text-gray-100 flex flex-col justify-between items-center py-10 md:px-32 md:rounded-tr-xl rounded-bl-xl md:rounded-bl-none rounded-br-xl  ">
          {itemAbout == "0" && (
            <>
              <div
                data-aos="zoom-in"
                data-aos-duration="600"
                className="mx-auto max-w-xl pb-16 px-2  sm:px-4 lg:px-6"
              >
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-primary-orange">
                    Sobre
                  </h2>
                  <p className=" text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Um pouco sobre mim
                  </p>
                </div>
              </div>
              <div className="mx-3 flex justify-center flex-wrap items-center space-y-10">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  className="flex justify-center text-sm max-w-lg flex-col space-y-8"
                >
                  <p className="text-center max-w-lg">
                    Sou um dedicado estudante de desenvolvimento, no início do
                    que pretendo ser uma longa e bem-sucedida carreira, pela
                    qual sou apaixonado, possuo 1 ano de experiência em
                    Javascript, HTML/Css, React e NodeJs, programando diferentes
                    tipos de aplicações para clientes locais, e para diversas
                    plataformas freelancer, criando desde simples blogs e
                    Landing Pages ate mesmo e-commerce sempre focado em otimizar
                    o Ux, e tornar os aplicativos mais fluidos e otimizados, com
                    o máximo de qualidade.
                    <br />
                    <br />
                    Na sua empresa, procuro a oportunidade de criar melhores web
                    application valorizando a experiência do usuário, com
                    responsabilidade e comprometimento.
                  </p>

                  <div className="flex justify-center  items-center ">
                    <a
                      href={cv}
                      className="bg-primary-orange rounded-lg px-10 py-3 flex justify-between items-center custom-btn btn-12"
                      target="_blank"
                    >
                      <BsFileEarmarkPdf className="inline text-white  " />
                      <span className="text-white text-sm font-bold">
                        Baixar CV
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
          {itemAbout == "1" && (
            <>
              <div
                data-aos="zoom-in"
                data-aos-duration="600"
                className="mx-auto max-w-xl pb-8 px-2  sm:px-4 lg:px-6"
              >
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-primary-orange">
                    Sobre
                  </h2>
                  <p className=" text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Historia
                  </p>
                </div>
              </div>
              <div className="mx-3 flex justify-center flex-wrap items-center space-y-10">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  className="flex justify-center text-sm max-w-lg flex-col space-y-4"
                >
                  <p className="text-center max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam temporibus dolorem, omnis iusto mollitia impedit
                    obcaecati vel reprehenderit corporis. Optio.
                  </p>

                  <div className="flex justify-center  h-full ">
                    <div
                      className="h-10 dark:bg-zinc-300 bg-opacity-90 bg-zinc-800"
                      style={{ width: "1px" }}
                    ></div>
                  </div>
                  <div className="flex vidro p-4 rounded-lg justify-center flex-col h-full px-6">
                    <div className="flex py-2 text-sm justify-between items-center">
                      <div className="flex justify-center items-center">
                        <a
                          href="#"
                          target="_blank"
                          className="flex justify-center items-center space-x-2 border-b-2 border-transparent hover:border-primary-orange transition-colors duration-300"
                        >
                          <BsGraphUp />
                          <h2>Mais Voip </h2>
                        </a>
                      </div>
                      <div className="flex justify-center items-center ">
                        00/00/0000 ~ atualamente
                      </div>
                    </div>
                    <p className="text-center    text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam temporibus dolorem, omnis iusto mollitia impedit
                      obcaecati vel reprehenderit corporis. Optio. Ullam
                      temporibus dolorem, omnis iusto mollitia impedit obcaecati
                      vel reprehenderit corporis. Optio. Ullam temporibus
                      dolorem, omnis iusto mollitia impedit obcaecati vel
                      reprehenderit corporis. Optio.
                    </p>
                  </div>
                  <div className="flex justify-center  h-full ">
                    <div
                      className="h-10 dark:bg-zinc-300 bg-opacity-90 bg-zinc-800"
                      style={{ width: "1px" }}
                    ></div>
                  </div>
                  <div className="flex vidro p-4 rounded-lg justify-center flex-col h-full px-6">
                    <div className="flex py-2 text-sm justify-between items-center">
                      <div className="flex justify-center items-center">
                        <a
                          href="#"
                          target="_blank"
                          className="flex justify-center items-center space-x-2 border-b-2 border-transparent hover:border-primary-orange transition-colors duration-300"
                        >
                          <BsGraphUp />
                          <h2>Mais Voip </h2>
                        </a>
                      </div>
                      <div className="flex justify-center items-center ">
                        00/00/0000 ~ atualamente
                      </div>
                    </div>
                    <p className="text-center    text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ullam temporibus dolorem, omnis iusto mollitia impedit
                      obcaecati vel reprehenderit corporis. Optio. Ullam
                      temporibus dolorem, omnis iusto mollitia impedit obcaecati
                      vel reprehenderit corporis. Optio. Ullam temporibus
                      dolorem, omnis iusto mollitia impedit obcaecati vel
                      reprehenderit corporis. Optio.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
          {itemAbout == "2" && (
            <>
              <div
                data-aos="zoom-in"
                data-aos-duration="600"
                className="mx-auto max-w-xl pb-16 px-2  sm:px-4 lg:px-6"
              >
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-primary-orange">
                    Sobre
                  </h2>
                  <p className=" text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Skills
                  </p>
                </div>
              </div>
              <div className="mx-3 flex justify-center flex-wrap items-center space-y-10">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="900"
                  className="flex justify-center text-sm max-w-lg flex-col space-y-8"
                >
                  <div className="text-center max-w-lg">
                    <ul
                      role="list"
                      className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6  xl:gap-x-8  "
                    >
                      {files.map((file) => (
                        <li key={file.source}>
                          <div data-aos="zoom-in" className="relative ">
                            <div
                              className="group  hover:scale-110
                              transition ease-in-out duration-500  px-4 block w-full overflow-hidden rounded-lg bg-transparent"
                            >
                              <img
                                src={file.source}
                                alt=""
                                className="pointer-events-none object-cover rounded-lg  w-full"
                              />
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-800 dark:text-gray-200">
                              {file.title}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center  py-10  flex-wrap ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-center flex-col max-w-xs text-gray-800  dark:text-gray-300 dark:bg-zinc-800 bg-zinc-300 rounded-lg shadow-xl items-center space-y-2 mx-4  mb-5 hover:scale-105 transition ease-in-out duration-300"
            >
              <div
              data-aos="zoom-in"
              >
                <div className="flex flex-col px-2 justify-around bg-primary-orange rounded-t-lg py-5 w-full  items-center text-base md:text-lg  text-gray-200">
                  <span>
                    <service.icon />
                  </span>
                  <h2 className=" font-semibold"> {service.title}</h2>
                </div>
                <div className="p-4 text-center ">
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
