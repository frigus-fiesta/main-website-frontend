import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeClients from "@/components/Home/HomeClients";
import Homepage from "@/components/Home/Homepage";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <Homepage/>
      <HomeAbout/>
      <HomeClients/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
