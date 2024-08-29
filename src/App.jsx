import { useEffect } from "react";
import Header from "./components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./components/banner";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portofolio />
      <Footer />
    </>
  );
}

export default App;
