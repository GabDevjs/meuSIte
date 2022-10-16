import type { NextPage } from "next";
import { HomePageTemplate } from "../components/template";

interface PropsType {
  backDark: any;
  backLight: any;
}

function Home({ backDark, backLight }: PropsType) {
  return <HomePageTemplate backDark={backDark} backLight={backLight} />;
}

export async function getServerSideProps() {
  const res = "https://prod.spline.design/Vs8GpYE54xmRqALi/scene.splinecode";

  const backLight = res;
  const backDark =
    "https://prod.spline.design/Hs26iQ9lzbtmyHbb/scene.splinecode";

  return {
    props: {
      backLight: JSON.parse(JSON.stringify(backLight)),
      backDark,
    },
  };
}

export default Home;
