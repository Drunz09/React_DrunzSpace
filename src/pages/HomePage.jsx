import { Clients } from "../components/Clients";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/HomePage/Hero";
import { BrowseRoom } from "../components/HomePage/BrowseRoom";
import { JustArrive } from "../components/HomePage/JustArrive";
import { SiteMap } from "../components/SiteMap";

export const HomePage = () => {
  return (
    <>
      <Header theme="white" position="true" />
      <Hero />
      <BrowseRoom />
      <JustArrive />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
};
