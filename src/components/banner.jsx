import { TypeAnimation } from "react-type-animation";

function Banner() {
  const name = "user";
  return (
    <>
      <div
        id="home"
        className="section container mx-auto max-w-[1200px] px-3 items-center"
      >
        <div className="w-full">
          <div className="block text-center font-secondary font-black text-[30px]">
            Hello
            <div>
              <TypeAnimation
                sequence={[name, 3000, "Welcome !!!", 3000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="ml-3 text-secondary"
              />
            </div>
          </div>
          <div className="max-w-[750px] text-center mx-auto ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            alias iste iure unde accusantium ratione distinctio, nemo dolorem
            ullam excepturi doloremque deserunt cumque laboriosam, quis itaque
            dolores? Optio, non aperiam!
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
