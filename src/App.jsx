import { useEffect, useState } from "react";
import Header from "./components/header";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./components/banner";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";
import Welcome from "./components/welcome";
import Contact from "./components/contact";

function App() {
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleUserNameSubmit = (name) => {
    setUserName(name);
    setIsOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {isOpen && <Welcome onsubmit={handleUserNameSubmit} />}

      {!isOpen && (
        <>
          <Header />
          <Navigation />
          <Banner userName={userName} />
          <Profile />
          <Portofolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
