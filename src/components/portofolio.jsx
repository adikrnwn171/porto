import Project from "./project";

function Portofolio() {
  const projects = [
    {
      id: 1,
      title: "Travelesia",
      stack:
        "NodeJS, ReactJS, PostgreSQL, ExpressJS, Bootstrap, Sequelize, Midtrans, Axios, Nodemailer",
      description: "Flight ticket booking application",
      link: "https://github.com/Final-Project-C7",
      responsibilities: [
        "Designed Entity Relationship Diagram",
        "Created database using PostgreSQL and Sequelize as ORM",
        "Developed Restful API using ExpressJS",
        "Mapping data from payload API to User Interface",
        "Handled user input to interact with API",
      ],
      images: [
        "/images/project1/1.png",
        "/images/project1/2.png",
        "/images/project1/3.png",
        "/images/project1/4.png",
        "/images/project1/5.png",
        "/images/project1/6.jpg",
        "/images/project1/7.jpg",
      ],
    },
    {
      id: 2,
      title: "Golang API",
      stack: "Go, Gin, PostgreSQL, GORM",
      description: "Restful API Golang with GIN",
      link: "https://github.com/Final-Task-Rakamin",
      responsibilities: [
        "Connected Go with PostgreSql using GORM",
        "Created Restful API using Gin Framework",
        "Implemented Authentication and Authorization using JWT",
      ],
      images: [
        "/images/project2/1.png",
        "/images/project2/2.png",
        "/images/project2/3.png",
        "/images/project2/4.png",
        "/images/project2/5.png",
        "/images/project2/6.png",
        "/images/project2/7.png",
      ],
    },
    {
      id: 3,
      title: "Movie Finder",
      stack: "ReactJS, TMDB API, Axios",
      description: "Search & view ratings of film from TMDB API",
      link: "https://github.com/adikrnwn171/movie-finder",
      responsibilities: [
        "Designed Entity Relationship Diagram",
        "Created database using PostgreSQL and Sequelize as ORM",
        "Mapping data from payload API to User Interface",
        "Handled user input to interact with API",
      ],
      images: [
        "/images/project3/1.png",
        "/images/project3/2.png",
        "/images/project3/3.png",
        "/images/project3/4.png",
        "/images/project3/5.png",
      ],
    },
    {
      id: 4,
      title: "Poliklinik",
      stack:
        "NodeJS, ReactJS, PostgreSQL, ExpressJS, Bootstrap, Sequelize, Nodemailer",
      description: "Application for registration and medical records patient",
      link: "https://github.com/adikrnwn171/project-poliklinik-fe",
      responsibilities: [
        "Designed Entity Relationship Diagram",
        "Created database using PostgreSQL and Sequelize as ORM",
        "Developed Restful API using ExpressJS",
        "Developed User Interface using ReactJS",
        "Mapping data from payload API to User Interface",
        "Handled user input to interact with API",
      ],
      images: [
        "/images/project4/1.png",
        "/images/project4/2.png",
        "/images/project4/3.png",
        "/images/project4/4.png",
      ],
    },
  ];

  return (
    <>
      <div id="portofolio" className="section">
        <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
          <div className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]">
            <div className="order-2 lg:order-1">
              <h4 className="text-third font-secondary text-[24px]">
                My Project
              </h4>
              <div className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
                Here are some projects I have worked on
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center">
              <h2 className="text-gradient font-primary max-w[700px] mx-auto text-[50px]">
                04
              </h2>
              <div>Completed Projects</div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portofolio;
