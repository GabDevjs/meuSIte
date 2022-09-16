import { Section } from "../atoms";


import Banner1 from "../../assets/imgPortifolio/banner1.jpg";
import Banner2 from "../../assets/imgPortifolio/banner2.jpg";
import Banner4 from "../../assets/imgPortifolio/banner4.jpg";
import Banner5 from "../../assets/imgPortifolio/banner5.jpg";
import Banner6 from "../../assets/imgPortifolio/banner6.jpg";
import Banner7 from "../../assets/imgPortifolio/banner7.jpg";
import { BsBehance, BsGithub } from "react-icons/bs";
import Image from "next/image";

const ArrayPortifolio4a6 = [];

const ArrayPortifolio1a3 = [
  {
    title: "Landing page - Pizzaria",
    description:
      "this is a landing page project made to be the page of a fictitious pizzeria. this page is made with html, css and javascript made to be responsive and modern and intuitive for the user.",
    img: Banner5,
    link: "https://www.behance.net/gallery/134377753/Landing-page-Pizzaria",
    git: "https://github.com/GabDevjs/LandingPage-Pizzaria",
  },

  {
    title: "Landing page - PetShop WebSite",
    description:
      "this is an html, scss and javascript landing page. made to promote a petshop and pet products store with delivivery, a website made to be modern and responsive to give the best experience for the user.",
    img: Banner4,
    link: "https://www.behance.net/gallery/134314129/Landing-page-PetShop-WebSite",
    git: "https://github.com/GabDevjs/Landing-page---PetShop-WebSite",
  },
  {
    title: "LandingPage - TravelWebsite",
    description:
      "this project is a landing page to promote a travel site, made with scss/sass html and javascript made with a modern and responsive design that tries to be the best experience for the user.",
    img: Banner7,
    link: "https://www.behance.net/gallery/134362077/Landing-Page-TravelWebsite",
    git: "https://github.com/GabDevjs/LandingPage-TravelWebsite",
  },
  {
    title: "React - Landing Page Real Estate",
    description:
      "this project is a react js landing page made to promote a fictional real estate company. built with a modern design and a simple interface.",
    img: Banner6,
    link: "https://www.behance.net/gallery/136798995/React-Landing-Page-Real-Estate",
    git: "https://www.behance.net/gallery/136798995/React-Landing-Page-Real-Estate",
  },

  {
    title: "Landing Page - WebSite App",
    description:
      "This is a basic landing page, made for the promotion of a fictitious app. Only html, css and javascript were used. Built with the focus of being responsive and having a modern design.",
    img: Banner1,
    link: "https://www.behance.net/gallery/133851709/Landing-Page-WebSite-App",
    git: "https://github.com/GabDevjs/LandingPage-WebSiteApp",
  },
  {
    title: "React.js - App Landing Page",
    description:
      "this is a React.js project made to be able to promote a landing page of a fictional app, built with styled-components and react-dom made with a modern and intuitive design.",
    img: Banner2,
    link: "https://www.behance.net/gallery/136105455/Reactjs-App-Landing-Page",
    git: "https://github.com/GabDevjs/React.js-Landing-Page-App",
  },
];

export const ProjetoSection = () => {
  return (
    <> 

      <div className="bg-backGround bg-opacity-20">
       
        <Section>
          <div className="text-white flex flex-col justify-center items-center max-w-7xl pb-16  mx-auto sm:px-6 lg:px-8">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              className="mx-auto max-w-7xl py-16 px-4  sm:px-6 lg:px-8"
            >
              <div className="text-center">
                <h2 className="text-lg font-semibold text-primary-orange">
                  Projetos
                </h2>
                <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Meus Projetos
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col">
              <div className=" p-10 space-y-6">
                <div className="flex justify-center md:justify-between flex-wrap m-3 ">
                  {ArrayPortifolio1a3.map((item, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      className="flex flex-col justify-between min-w-[22rem]  items-center max-w-xs p-3 m-2 rounded-lg shadow-lg vidro bg-opacity-30 hover:scale-105 transition-all duration-300  "
                    >
                      <div className="flex flex-col justify-center items-center ">
                        <Image src={item.img} alt="" className="rounded-lg" />
                      </div>
                      <h2 className="mb-6 mt-2 font-semibold text-gray-200">
                        {item.title}
                      </h2>
                      <p className="text-gray-300 text-center">
                        {item.description}
                      </p>
                      <div className="flex justify-around py-4 items-center w-full">
                        <a
                          className="text-2xl hover:bg-gray-100 p-2 rounded-full hover:scale-110  text-gray-100 hover:text-primary-orange transition-all duration-200"
                          href={item.link}
                          target="_blank"
                        >
                          <BsBehance size={25} />
                        </a>
                        <a
                          className="text-2xl hover:bg-gray-100 p-2 rounded-full hover:scale-110  text-gray-100 hover:text-primary-orange transition-all duration-200"
                          href={item.git}
                          target="_black"
                        >
                          <BsGithub size={25} />
                        </a>
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
