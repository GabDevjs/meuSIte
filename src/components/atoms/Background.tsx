import Spline from "@splinetool/react-spline";

export const Background = () => {
  return (
    <>
      <div className="absolute w-screen h-screen hidden dark:block">
        <Spline scene="https://prod.spline.design/Hs26iQ9lzbtmyHbb/scene.splinecode" />
      </div>
      <div className="absolute w-screen h-screen block dark:hidden">
      <Spline scene="https://prod.spline.design/Vs8GpYE54xmRqALi/scene.splinecode" />
      </div>
    </>
  );
};