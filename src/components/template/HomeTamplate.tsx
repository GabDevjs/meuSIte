import { Section } from "../atoms";
import { Home } from "../molecules";

export const HomePageTemplate = () => {
  return (
    <>
      <Home />
      <Section>
        <div>
          <h1 className="bg-red-500">Home Page</h1>
        </div>
      </Section>
    </>
  );
};
