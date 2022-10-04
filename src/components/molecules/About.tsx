import Image from "next/image";
import ImageABout from "../../assets/PerfilRedesJobbs.jpeg";
import { Button, Section } from "../atoms";
import {
  BsArrowsFullscreen,
  BsBack,
  BsCalendar,
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

import logoMaisVoip from "../../assets/mainvoip.jpg";
import logoWorkana from "../../assets/workana.jpg";
import Link from "next/link";

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

const skills = {
  javascript: {
    title: "Javascript",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    porcentagem: "w-[90%]",
  },
  typescript: {
    title: "Typescript",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg",
    porcentagem: "w-[90%]",
  },
  html: {
    title: "Html",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    porcentagem: "w-[99%]",
  },
  css: {
    title: "Css",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    porcentagem: "w-[98%]",
  },
  git: {
    title: "Git",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain-wordmark.svg",

    porcentagem: "w-[78%]",
  },
  npm: {
    title: "Npm",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",
    porcentagem: "w-[96%]",
  },
  next: {
    title: "Next",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    porcentagem: "w-[93%]",
  },
  react: {
    title: "React",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    porcentagem: "w-[95%]",
  },
  vue: {
    title: "vue",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    porcentagem: "w-[45%]",
  },

  adonis: {
    title: "Adonis",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/adonisjs/adonisjs-original.svg",
    porcentagem: "w-[78%]",
  },
  node: {
    title: "Node",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    porcentagem: "w-[88%]",
  },
  mysql: {
    title: "Mysql",
    source:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-plain-wordmark.svg",
    porcentagem: "w-[86%]",
  },
};

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
      className="bg-zinc-200 dark:bg-[#202025] z-50  py-10 px-2 sm:px-4 lg:px-6 "
    >
      <section className="flex  justify-center h-full w-full py-5  ">
        <div className="w-full md:w-auto shadow-2xl shadow-zinc-400 dark:shadow-[#303030] rounded-xl flex justify-center flex-col md:flex-row">
          <div className="lg:text-center flex justify-center md:justify-start dark:bg-zinc-600 bg-zinc-400 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl py-1 md:pl-5 px-2 md:pt-10 ">
            {itemsABoutBar.map((item, index) => {
              return (
                <div
                  key={index}
                  data-aos="zoom-in"
                  className="h-10 group flex justify-center cursor-pointer text-zinc-800 dark:text-gray-100 text-sm font-bold pl-2 pr-4"
                  onClick={() => setItemAbout(item.type)}
                >
                  <a className="flex z-20 justify-start items-center">
                    <item.icon className="text-lg  mr-1" />
                    <h3 className="text-base group-hover:scale-105 transition-all duration-300 ">
                      {item.title}
                    </h3>
                  </a>
                  <div
                    className={`hidden md:inline pl-2 pr-4 rounded-l-lg  absolute w-36  group-hover:translate-x-5 transition-transform text-gray-800 bg-zinc-300 duration-500 dark:bg-[#181a1d]  h-10 ${
                      itemAbout == item.type
                        ? "translate-x-5"
                        : "translate-x-36"
                    }`}
                  ></div>
                  <div
                    className={`inline md:hidden pl-2 pr-4 rounded-t-lg  absolute w-full  group-hover:translate-y-0 transition-transform text-gray-800 bg-zinc-300 duration-500 dark:bg-zinc-800  h-12 ${
                      itemAbout == item.type
                        ? "translate-y-0 "
                        : "translate-y-12"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>

          <div className="text-gray-800   z-10 bg-zinc-300 bg-opacity-90 dark:bg-[#181a1d] dark:text-gray-100 flex flex-col justify-between items-center py-10 md:px-32 md:rounded-tr-xl rounded-bl-xl md:rounded-bl-none rounded-br-xl  ">
            {itemAbout == "0" && (
              <>
                <div
                  data-aos="zoom-in"
                  className="mx-auto min-w-xl pb-16 px-2  sm:px-4 lg:px-6"
                >
                  <div className="text-center">
                    <h2 className="text-lg font-semibold text-primary-orange">
                      Sobre
                    </h2>
                    <p className=" text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      Um pouco sobre mim
                    </p>
                  </div>
                </div>
                <div className="mx-3 flex justify-center flex-wrap items-center space-y-10">
                  <div
                    data-aos="zoom-in"
                    className="flex justify-center text-sm max-w-lg flex-col space-y-8"
                  >
                    <p className="text-center md:text-justify max-w-lg leading-relaxed">
                      Criei esse site com todos os detalhes para que você veja
                      todos os features disponiveis nele, meu curriculo, meus
                      projetos já executados e meus contatos. Sinta-se a vontade
                      para explorar, e caso tenha alguma dúvida, já sabe! Basta
                      entrar em contato comigo :)
                      <br />
                      <br />
                      Há 2 anos, despretenciosamente me interessei por
                      programação e desenvolvimento e iniciei meus estudos. Não
                      imaginava que iria me apaixonar e me dedicar tanto a área,
                      e que isso mudaria minha vida rapidamente! Hoje, sou um
                      profissional desenvolvedor, no início de minha carreira.
                      <br />
                      <br />
                      Possuo 1 ano de experiência em FrontEnd nas tecnologias
                      Javascript, Typescript, Next, React, HTML/Css, SASS, e em
                      Backend nas tecnologias Node, Vercel e Adonis. Programando
                      diferentes tipos de aplicações para clientes locais, e
                      para diversas plataformas freelancer, criando desde blogs
                      e Landing Pages ate e sistemas empresariais, sempre focado
                      em otimizar o Ux, e tornar os aplicativos mais fluidos e
                      otimizados, com o máximo de qualidade, dentro das
                      necessidades do cliente.
                      <br />
                      <br />
                      Na sua empresa, procuro a oportunidade de criar melhores
                      web application valorizando a experiência do usuário, com
                      responsabilidade e comprometimento.
                    </p>

                    <div
                      data-aos="zoom-in"
                      className="flex justify-center  items-center "
                    >
                      <Link href={cv}>
                        <a
                          className="bg-primary-orange rounded-lg px-14 py-3 flex justify-between items-center custom-btn btn-12 hover:scale-110"
                          target="_blank"
                        >
                          <BsFileEarmarkPdf className="inline mr-1 text-white  " />
                          <span className="text-white inline text-sm font-bold">
                            Baixar CV
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
            {itemAbout == "1" && (
              <>
                <div className="md:mx-auto w-full  md:max-w-lg lg:max-w-xl pb-8   sm:px-4 lg:px-6">
                  <div className="text-center w-full">
                    <h2 className="text-lg font-semibold text-primary-orange">
                      Sobre
                    </h2>
                    <p className=" text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      Historia
                    </p>
                  </div>

                  <div className="flex  justify-center text-sm w-full flex-col space-y-2 ">
                    <p
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      className="text-center md:text-justify  leading-relaxed mb-5 px-2"
                    >
                      Lá na Homepage, te contei um pouco da minha história.
                      <br />
                      Aqui é onde ela continua! Vamos nessa?
                    </p>

                    <div
                      data-aos="zoom-in"
                      className="flex sm:w-auto hover:scale-105 transition-all duration-300 justify-center flex-col w-full "
                    >
                      <div className="shadow-2xl md:flex-col rounded-t-xl   sm:rounded-xl hover:scale-105 transition-all duration-300 border border-zinc-400 ">
                        <div className=" md:px-4  bg-zinc-400 text-gray-100 dark:bg-zinc-600 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl  py-2  justify-center items-center ">
                          <div className="flex justify-center flex-col md:flex-row items-center  text-base  ">
                            <Image
                              className="rounded-md"
                              src={logoMaisVoip}
                              alt={"logo mais voip"}
                              width={40}
                              height={40}
                              priority
                            />
                            <h2 className="text-center md:text-clip md:ml-2">
                              {" "}
                              MaisVoip Serviços de Telecomunicações
                            </h2>
                          </div>
                        </div>
                        <p className="text-center flex items-center flex-col  bg-zinc-200 dark:bg-zinc-500 sm:rounded-b-xl w-full leading-relaxed px-5 py-2 md:py-5 text-sm">
                          Após 1 ano de estudos diários, iniciei na empresa
                          MaisVoip em São Paulo - SP, onde desenvolvo um sistema
                          num projeto privado para um cliente de telefonia.
                          <div className="flex flex-col md:flex-row w-full py-4 md:px-10 justify-around items-center">
                            <span className="flex justify-center items-center">
                              <h3 className="font-semibold">De:</h3>
                              <BsCalendar className="inline mx-2" />
                              20/06/2022
                            </span>

                            <span className="flex justify-center items-center">
                              <h3 className="font-semibold">Ate:</h3>
                              <BsCalendar className="inline md:mx-2" />
                              <h3 className="font-semibold text-primary-orange">
                                Atualmente!
                              </h3>
                            </span>
                          </div>
                          <div>
                            <Link href="https://www.linkedin.com/company/maisvoip/mycompany/">
                              <a
                                target="_blank"
                                className="bg-[#6dbd06]  px-16 rounded-lg  md:w-auto md:px-10 py-3 flex justify-between items-center custom-btn btn-12 hover:scale-105"
                              >
                                <span className="text-gray-100 text-sm font-bold">
                                  MaisVoip
                                </span>
                              </a>
                            </Link>
                          </div>
                        </p>
                      </div>
                    </div>

                    <div
                      data-aos="zoom-in"
                      className="flex justify-center mx-2 h-full "
                    >
                      <div
                        className="h-10 dark:bg-zinc-300 bg-opacity-90 bg-zinc-800"
                        style={{ width: "1px" }}
                      ></div>
                    </div>

                    <div
                      data-aos="zoom-in"
                      className="flex  bg hover:scale-105 transition-all duration-300 justify-center flex-col w-full "
                    >
                      <div className="shadow-2xl md:flex-col rounded-t-xl  sm:rounded-xl hover:scale-105 transition-all duration-300 border border-zinc-400 ">
                        <div className=" md:px-4  bg-zinc-400 text-gray-100 dark:bg-zinc-600 rounded-tl-xl md:flex-col md:space-y-4  rounded-bl-none rounded-tr-xl  py-2  justify-center items-center ">
                          <div className="flex flex-col md:flex-row justify-center items-center text-base  ">
                            <Image
                              className="rounded-md"
                              src={logoWorkana}
                              alt={"logo workana"}
                              width={30}
                              height={30}
                              priority
                            />
                            <h2 className="md:ml-2">Workana </h2>
                          </div>
                        </div>
                        <p className="text-center flex items-center flex-col  bg-zinc-200 dark:bg-zinc-500 sm:rounded-b-xl w-full leading-relaxed px-5 py-2 md:py-5 text-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ullam temporibus dolorem, omnis iusto mollitia
                          impedit obcaecati vel reprehenderit corporis.
                          <div className="flex flex-col md:flex-row w-full py-4 md:px-10 justify-around items-center">
                            <span className="flex justify-center items-center">
                              <h3 className="font-semibold">De:</h3>
                              <BsCalendar className="inline mx-2" />
                              00/00/0000
                            </span>

                            <span className="flex justify-center items-center">
                              <h3 className="font-semibold">Ate:</h3>
                              <BsCalendar className="inline mx-2" />
                              00/00/0000
                            </span>
                          </div>
                          <div>
                            <Link href="https://www.linkedin.com/company/maisvoip/mycompany/">
                              <a
                                target="_blank"
                                className="bg-[#4d2d9f] rounded-lg px-16 py-3 flex justify-between items-center custom-btn btn-12 hover:scale-105 transition-all duration-200"
                              >
                                <span className="text-white text-sm font-bold">
                                  workana
                                </span>
                              </a>
                            </Link>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {itemAbout == "2" && (
              <>
                <div className="mx-auto  max-w-xs md:max-w-xl lg:max-w-2xl pb-8   sm:px-4 lg:px-6">
                  <div data-aos="zoom-in" className="text-center">
                    <h2 className="text-lg font-semibold text-primary-orange">
                      Sobre
                    </h2>
                    <p className=" text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      Tecnologias
                    </p>
                  </div>
                </div>
                <div data-aos="zoom-in" className="sm:px-10 md:px-0 ">
                  <div className="w-full   border border-gray-300 customTrack overflow-x-hidden shadow ring-1 ring-black ring-opacity-5 rounded-xl  ">
                    <div className="grid grid-cols-2 gap-5 w-full   lg:grid-cols-3  bg-gray-200  dark:bg-zinc-700 dark:bg-opacity-30">
                      {Object.values(skills).map((file, index) => (
                        <div
                          key={index}
                          className="hover:bg-zinc-500 rounded-lg group col-span-1 divide-y divide-gray-200  transition-all duration-200 hover:text-gray-100 "
                        >
                          <div className="flex justify-center items-center flex-col">
                            <div className="w-full flex  flex-col items-stretch justify-between py-5 pl-5 pr-4 text-xl font-medium    ">
                              <div className="relative flex group justify-center items-center py-4 px-4 lg:px-8">
                                <div
                                  style={{
                                    backgroundImage: `url(${file.source})`,
                                    backgroundSize: "contain",
                                    backgroundOrigin: "border-box",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                  className="w-16 z-50  h-16  md:w-28 md:h-28 self-center rounded-lg flex justify-center items-center group-hover:scale-125 transition-all duration-300  "
                                >
                                  <div className="flex justify-center items-center w-full h-full bg-gray "></div>
                                </div>
                                <div
                                  style={{
                                    backgroundSize: "contain",
                                    backgroundOrigin: "border-box",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                  }}
                                  className={`w-20 z-40 shadow-2xl  h-20 bg-zinc-900 group-hover:bg-zinc-400 dark:bg-zinc-500  bg-opacity-20 absolute  md:w-36 md:h-36 self-center rounded-lg flex justify-center items-center  transition-all duration-500 ${
                                    index % 2 == 0
                                      ? "group-hover:-rotate-12  "
                                      : "group-hover:rotate-12 "
                                  }`}
                                >
                                  <div className="flex justify-center items-center w-full h-full bg-gray "></div>
                                </div>
                              </div>
                              <dl className="font-semibold flex justify-center items-center  md:hidden">
                                <dt className="sr-only">Title</dt>
                                <dd className="mt-1 truncate   ">
                                  {file.title}
                                </dd>
                              </dl>
                            </div>

                            <div className="hidden px-8 py-4 text-center text-lg font-semibold leading-relaxed  lg:flex justify-center items-center">
                              {file.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center  py-10  flex-wrap ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center   hover:scale-105 transition ease-in-out duration-300"
            >
              <div
                data-aos="zoom-in"
                className="shadow-xl sm:shadow-lg shadow-zinc-400 dark:shadow-[#303030] flex justify-center flex-col max-w-xs text-gray-800   dark:text-gray-300 dark:bg-[#181a1d] bg-zinc-300 rounded-lg  items-center space-y-2 mx-4  mb-10 sm:mb-6"
              >
                <div className="flex flex-col px-2 justify-around bg-primary-orange rounded-t-lg py-5 w-full  items-center text-xs md:text-base  text-gray-200">
                  <span>
                    <service.icon />
                  </span>
                  <h2 className=" font-semibold"> {service.title}</h2>
                </div>
                <div className="p-6 text-center ">
                  <p className="text-xs  md:text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
