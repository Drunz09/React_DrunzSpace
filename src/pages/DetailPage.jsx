import { BreadCrumb } from "../components/BreadCrumb";
import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SiteMap } from "../components/SiteMap";
import { ProductDetails } from "../components/Details/ProductDetails";
import { Suggestion } from "../components/Details/Suggestion";

export const DetailsPage = () => {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/", name: "Office Room" },
          { url: "/categories/1235/products/12435", name: "Detail" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
};
