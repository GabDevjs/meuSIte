import { Footer, Navbar } from "../../components/organisms";
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children, ...rest } = props;

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
