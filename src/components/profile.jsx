import Skill from "./skill";

function Profile() {
  const skills = [
    { url: "images/1.png", alt: "HTML", title: "HTML" },
    { url: "images/2.png", alt: "CSS", title: "CSS" },
    { url: "images/3.png", alt: "Bootstrap", title: "Bootstrap" },
    { url: "images/7.png", alt: "TailwindCSS", title: "TailwindCSS" },
    { url: "images/4.png", alt: "NodeJS", title: "NodeJS" },
    { url: "images/5.png", alt: "ExpressJS", title: "ExpressJS" },
    { url: "images/6.png", alt: "ReactJS", title: "ReactJS" },
    { url: "images/9.png", alt: "Sequelize", title: "Sequelize" },
    { url: "images/8.png", alt: "PostgreSQL", title: "PostgreSQL" },
    { url: "images/10.png", alt: "MongoDB", title: "MongoDB" },
    { url: "images/11.png", alt: "Postman", title: "Postman" },
    { url: "images/12.png", alt: "GO", title: "GO" },
  ];

  return (
    <>
      <div id="profile" className="section mt-28">
        <div className="container mx-auto max-w-[1200px] p-3 overflow-hidden">
          <div className="font-secondary text-center font-bold mb-12">
            <h4 className="text-third mb-3">Tech Stack</h4>
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
              Here are some tech stacks that I am proficient in and commonly use
              in the projects I work on
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]">
              <div className="min-w-[300px] min-h-[300px] bg-gradient pt-[50px] rounded-full overflow-hidden">
                <img src="/images/profile.PNG" alt="profile" />
              </div>
              <h2 className="text-gradient text-[50px] mt-[20px]">
                Wira Adi Kurniawan
              </h2>
            </div>
            <div className="w-full lg:pt-[50px] lg:ml-[50px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {/* Skill */}
                {skills.map((skill, index) => (
                  <Skill
                    key={index}
                    url={skill.url}
                    alt={skill.alt}
                    title={skill.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
