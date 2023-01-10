import { Section } from "../atoms";

import Banner4 from "../../assets/imgPortifolio/banner4.webp";
import Banner5 from "../../assets/imgPortifolio/banner5.webp";
import Banner7 from "../../assets/imgPortifolio/banner7.webp";
import { BsBehance, BsEyeFill, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiSass } from "react-icons/si";

const ArrayPortifolio1a3 = [
  {
    title: "Site institucional - Pizzaria",
    description:
      "Esse é um site institucional construído com o foco de treinar minhas habilidades. esse site foi construído com Html5, css3 e Javascript vanila, simples porem moderno e bonito.",
    img: Banner5,
    projectSkill1: "HTML",
    projectSkill2: "CSS",
    projectSkill3: "JavaScript",
    link: "https://www.behance.net/gallery/134377753/Landing-page-Pizzaria",
    git: "https://github.com/GabDevjs/LandingPage-Pizzaria",
    linkLocal: "/projects/pizzaria/index.html",
  },

  {
    title: "Site institucional - PetShop",
    description:
      "Esse é uma landing page construída com Html5, Sass e javascript vanila feito na intenção de exercitar minhas habilidades.",
    img: Banner4,
    projectSkill1: "HTML",
    projectSkill2: "SASS",
    projectSkill3: "JavaScript",

    link: "https://www.behance.net/gallery/134314129/Landing-page-PetShop-WebSite",
    git: "https://github.com/GabDevjs/Landing-page---PetShop-WebSite",
    linkLocal: "/projects/pet/index.html",
  },
  {
    title: "Site institucional - Travel",
    description:
      "esse é um site institucional construído com o fim de estudar e exercitar minhas habilidades, comstruido  com Html, sass e javascript vanila.",
    img: Banner7,
    projectSkill1: "HTML",
    projectSkill2: "SASS",
    projectSkill3: "JavaScript",
    link: "https://www.behance.net/gallery/134362077/Landing-Page-TravelWebsite",
    git: "https://github.com/GabDevjs/LandingPage-TravelWebsite",
    linkLocal: "/projects/travel/index.html",
  },
];

export const ProjetoSection = () => {
  function handleIconProjeto(Skill: string) {
    switch (Skill) {
      case "HTML":
        return <FaHtml5 className="inline bg-[#f06529] p-1 rounded-full" />;
      case "CSS":
        return <FaCss3 className="inline bg-[#2965f1] p-1 rounded-full" />;
      case "JavaScript":
        return (
          <SiJavascript className="inline bg-[#efd81d] p-1 rounded-full" />
        );
        case "SASS":
        return (
          <SiSass className="inline bg-[#c76494] p-1 rounded-full" />
        );
      case "React":
        return <BsEyeFill />;
      case "Next":
        return <BsEyeFill />;
      case "Node":
        return <BsEyeFill />;
      default:
        return <BsEyeFill />;
    }
  }
  return (
    <>
      <div
        id="Projetos"
        className=""
      >
        <Section>
          <div className="text-white flex flex-col justify-center items-center max-w-7xl pb-16  mx-auto sm:px-6 lg:px-8">
            <div
              data-aos="zoom-in"
              className="mx-auto max-w-7xl py-8 pb-10 px-4  sm:px-6 lg:px-8"
            >
              <div className="text-center">
                <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Meus Projetos
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col">
              <div className="w-full  md:px-10 ">
                <div className="flex w-full justify-center sm:justify-around flex-wrap ">
                  {ArrayPortifolio1a3.map((item, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      className="p-3 flex-initial cursor-default w-full md:w-1/2 lg:w-1/3 shadown-xl shadown-zinc-600"
                    >
                      <div
                        className={`flex h-full flex-col justify-between  items-center md:max-w-sm
                        xl:max-w-xs  p-1 rounded-3xl shadow-lg vidro  bg-neutral-700 hover:scale-105 transition-all duration-300  `}
                      >
                        <div className="flex flex-col justify-center items-center ">
                          <Image src={item.img} alt={`Imagen ${item.title}`} className="rounded-t-3xl rounded-b-xl" />
                        </div>

                        <h2 className=" mt-2 font-semibold text-gray-200">
                          {item.title}
                        </h2>
                        <div className="flex my-2 justify-center space-x-4 items-center w-full px-5 text-3xl">
                          <div className="hover:scale-125  transition-all duration-300">
                            {handleIconProjeto(item.projectSkill2)}
                          </div>
                          <div className="text-4xl hover:scale-110  transition-all duration-300">
                            {handleIconProjeto(item.projectSkill1)}
                          </div>
                          <div className="hover:scale-125  transition-all duration-300">
                            {handleIconProjeto(item.projectSkill3)}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm text-center px-4">
                          {item.description}
                        </p>
                        <div className="flex justify-around py-4 items-center w-full">
                          <Link href={item.link}>
                            <a
                              className="text-2xl hover:bg-gray-100 p-2 rounded-full hover:scale-110  text-gray-100 hover:text-primary-orange transition-all duration-200"
                              target="_blank"
                            >
                              <BsBehance size={25} />
                            </a>
                          </Link>
                          <Link href={item.linkLocal}>
                            <a
                              className="text-2xl bg-gray-100 hover:bg-transparent p-2 rounded-full hover:scale-150  hover:text-gray-100 text-primary-orange transition-all duration-300"
                              target="_blank"
                            >
                              <BsEyeFill size={30} />
                            </a>
                          </Link>
                          <Link href={item.git}>
                            <a
                              className="text-2xl hover:bg-gray-100 p-2 rounded-full hover:scale-110  text-gray-100 hover:text-primary-orange transition-all duration-200"
                              target="_black"
                            >
                              <BsGithub size={25} />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};
