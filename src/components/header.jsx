import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
        <div className="flex justify-between py-5 items-center">
          <div
            className="text-gradient font-secondary"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <a href="">
              <h1 className="text-[30px] leading-none font-bold">Wira</h1>
            </a>
            <h4 className="font-normal leading-none">Adi Kurniawan</h4>
          </div>
          <div
            className="flex items-center space-x-3"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adikrnwn171@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>

            <a
              href="https://github.com/adikrnwn171"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/wira-adi-kurniawan-799176270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
