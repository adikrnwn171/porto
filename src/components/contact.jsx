import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail, MdDownloadForOffline } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
        <div className="font-secondary text-center font-bold mb-12">
          <h4 className="text-third mb-3">Contact</h4>
          <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
            For more information you can contact me at:
          </h2>
        </div>
        <div className="container">
          <div className="max-w-[700px] mx-auto">
            <div className="flex items-center mx-auto justify-center">
              <BsGithub className="mr-1" /> Github :
              <a
                href="https://github.com/adikrnwn171"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold ml-2"
              >
                adikrnwn171
              </a>
            </div>
            <div className="flex items-center mx-auto justify-center">
              <BsLinkedin className="mr-1" /> Linkedin :
              <a
                href="https://www.linkedin.com/in/wira-adi-kurniawan-799176270/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold ml-2"
              >
                Wira Adi Kurniawan
              </a>
            </div>
            <div className="flex items-center mx-auto justify-center">
              <MdEmail className="mr-1" /> Email :
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=adikrnwn171@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold ml-2"
              >
                adikrnwn171@gmail.com
              </a>
            </div>
            <div className="flex items-center mx-auto justify-center mt-5 text-blue-500">
              <MdDownloadForOffline className="mr-1" />
              <a
                href="/assets/cv.pdf"
                download="CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold "
              >
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
