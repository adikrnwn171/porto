import { TypeAnimation } from "react-type-animation";

function Banner({ userName }) {
  return (
    <>
      <div
        id="home"
        className="section container mx-auto max-w-[1200px] h-full px-3 items-center"
      >
        <div className="w-full" data-aos="zoom-in" data-aos-duration="500">
          <div className="block text-center font-secondary font-black text-[30px]">
            Hello
            <div>
              <TypeAnimation
                sequence={[userName, 3000, "Welcome !!!", 3000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="ml-3 text-third"
              />
            </div>
          </div>
          <div className="max-w-[750px] text-center mx-auto mt-10">
            As a fresh graduate in Informatics Engineering from Universitas Dian
            Nuswantoro Semarang , I bring a strong foundation in web
            development, honed through participation in the Binar Fullstack Web
            Development Bootcamp Wave 4 and a virtual internship Fullstack Web
            Development Rakamin Academy x BTPN Syariah. I am highly motivated
            and passionate about web development, with a particular interest in
            fullstack development. I am eager to leverage my skills and
            enthusiasm to contribute to a dynamic team in an entry-level
            fullstack developer role. I am currently residing in Boyolali
            Regency, Central Java. I am willing to relocate to seek job
            opportunities.
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
