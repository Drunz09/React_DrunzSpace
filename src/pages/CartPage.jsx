import { Header } from "../components/Header";
import { BreadCrumb } from "../components/BreadCrumb";
import { Clients } from "../components/Clients";
import { SiteMap } from "../components/SiteMap";
import { Footer } from "../components/Footer";
import { CartMenu } from "../components/Cart/index";

export const CartPage = () => {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <CartMenu />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
};
