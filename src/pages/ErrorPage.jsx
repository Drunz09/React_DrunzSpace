import { Header } from "../components/Header";
import { SiteMap } from "../components/SiteMap";
import { Footer } from "../components/Footer";
import { Error404 } from "../components/ErrorPage/404";

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <Error404 />
      <SiteMap />
      <Footer />
    </>
  );
};
