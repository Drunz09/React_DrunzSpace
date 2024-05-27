import { BreadCrumb } from "../components/BreadCrumb";
import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SiteMap } from "../components/SiteMap";
import { Congratulation } from "../components/Succes/Congratulation";

export const successPage = () => {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb list={[{ url: "/", name: "Home" }]} />
      <Congratulation />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
};
